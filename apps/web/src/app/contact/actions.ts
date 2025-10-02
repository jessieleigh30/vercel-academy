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
  // Step 1: Extract data from FormData
  // FormData.get() returns string | File | null, so we need type assertions
  const data: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
    phone: (formData.get('phone') as string) || undefined,
  };

  // Step 2: Server-side validation
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Name is required';
  }

  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Email is required';
  } else if (!data.email.includes('@')) {
    errors.email = 'Invalid email address';
  }

  if (!data.subject || data.subject.trim().length === 0) {
    errors.subject = 'Subject is required';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
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
    // Step 3: Simulate processing (in real app, this would be database save, email send, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Step 4: Simulate the existing API call logic
    // In a real implementation, you'd save to database, send email, etc.
    console.log('Contact form submitted:', data);

    // Step 5: Optionally revalidate the page to show updated state
    revalidatePath('/contact');

    // Step 6: Return success response
    return {
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
    };
  } catch (error) {
    // Step 7: Handle server errors
    console.error('Contact form submission error:', error);

    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
