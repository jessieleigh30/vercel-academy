'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

// Define the form data structure for type safety
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

// Define the return type for our server action
export type ActionResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

// Simple rate limiting using in-memory storage (for demo purposes)
// In production, use Redis or a database with proper rate limiting library
const submissionTimestamps = new Map<string, number[]>();

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = submissionTimestamps.get(identifier) || [];

  // Remove timestamps older than 1 hour
  const recentTimestamps = timestamps.filter(ts => now - ts < 3600000);

  // Allow max 5 submissions per hour
  if (recentTimestamps.length >= 5) {
    return true;
  }

  // Update timestamps
  recentTimestamps.push(now);
  submissionTimestamps.set(identifier, recentTimestamps);

  return false;
}

// Input sanitization helper
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Limit length
}

// Email validation with regex
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Server Action for handling contact form submissions with useActionState
 *
 * Key concepts:
 * 1. 'use server' directive marks this as a server-only function
 * 2. useActionState requires signature: (prevState, formData)
 * 3. Receives FormData object (not JSON like fetch calls)
 * 4. Performs validation on the server
 * 5. Can redirect, revalidate, or return data
 */
export async function submitContactForm(prevState: ActionResult, formData: FormData): Promise<ActionResult> {
  // Step 1: Extract and sanitize data from FormData
  const rawEmail = (formData.get('email') as string) || '';

  // Step 2: Rate limiting check
  if (isRateLimited(rawEmail)) {
    return {
      success: false,
      message: 'Too many submission attempts. Please try again later.',
    };
  }

  // Step 3: Extract and sanitize all fields
  const data: ContactFormData = {
    name: sanitizeInput(formData.get('name') as string),
    email: sanitizeInput(rawEmail),
    subject: sanitizeInput(formData.get('subject') as string),
    message: sanitizeInput(formData.get('message') as string),
    phone: formData.get('phone') ? sanitizeInput(formData.get('phone') as string) : undefined,
  };

  // Step 4: Server-side validation with improved checks
  const errors: Record<string, string> = {};

  if (!data.name || data.name.length === 0) {
    errors.name = 'Name is required';
  } else if (data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (data.name.length > 100) {
    errors.name = 'Name is too long';
  }

  if (!data.email || data.email.length === 0) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email address';
  } else if (data.email.length > 100) {
    errors.email = 'Email is too long';
  }

  if (!data.subject || data.subject.length === 0) {
    errors.subject = 'Subject is required';
  } else if (data.subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
  } else if (data.subject.length > 200) {
    errors.subject = 'Subject is too long';
  }

  if (!data.message || data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (data.message.length > 1000) {
    errors.message = 'Message is too long (max 1000 characters)';
  }

  // Optional phone validation
  if (data.phone && data.phone.length > 0) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
      errors.phone = 'Invalid phone number format';
    }
  }

  // Return validation errors if any
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please fix the errors below',
      errors,
    };
  }

  try {
    // Step 5: Simulate processing (in real app, this would be database save, email send, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Step 6: Process the form (log for now, in production: save to DB, send email, etc.)
    // DO NOT log sensitive data in production
    console.log('Contact form submitted successfully');

    // Step 7: Optionally revalidate the page to show updated state
    revalidatePath('/contact');

    // Step 8: Return success response
    return {
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
    };
  } catch (error) {
    // Step 9: Handle server errors without leaking details
    console.error('Contact form submission error:', error);

    // Generic error message for security (don't expose internal errors)
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
