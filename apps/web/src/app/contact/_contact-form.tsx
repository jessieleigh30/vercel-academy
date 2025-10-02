'use client';

import { useActionState } from 'react';
import { track } from '@vercel/analytics';
import { submitContactForm } from './actions';

// Component for the submit button
function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={`block w-full px-8 py-4 text-base font-black uppercase tracking-wide transition-all duration-200 ${
        pending ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800'
      }`}
      style={{ fontFamily: 'var(--font-display)' }}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export function ContactForm() {
  // useActionState hook manages server action state
  // It returns [state, formAction, isPending] where:
  // - state: the return value from our server action
  // - formAction: the function to use as the form action
  // - isPending: boolean indicating if the action is currently running
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const result = await submitContactForm(prevState, formData);

      // Track successful form submissions
      if (result.success) {
        track('Contact Form Submitted', {
          name: formData.get('name') as string,
          subject: formData.get('subject') as string,
        });
      }

      return result;
    },
    {
      success: false,
      message: '',
    }
  );

  return (
    <div>
      {/*
        Key Server Actions concepts in this form:
        1. action={formAction} - Uses our server action instead of onSubmit
        2. No controlled components - React doesn't manage input values
        3. name attributes are crucial - they become FormData keys
        4. Form resets automatically on successful submission
      */}
      <form action={formAction}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Name *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                    placeholder="Your full name"
                  />
                  {state.errors?.name && <p className="mt-1 text-sm text-red-400">{state.errors.name}</p>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Email *
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                    placeholder="your.email@example.com"
                  />
                  {state.errors?.email && <p className="mt-1 text-sm text-red-400">{state.errors.email}</p>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Phone
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                    placeholder="+1 (555) 123-4567"
                  />
                  {state.errors?.phone && <p className="mt-1 text-sm text-red-400">{state.errors.phone}</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Subject *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                    placeholder="How can we help you?"
                  />
                  {state.errors?.subject && <p className="mt-1 text-sm text-red-400">{state.errors.subject}</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Message *
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                    placeholder="Tell us more about your inquiry..."
                    minLength={10}
                  />
                  {state.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>}
                </div>
                <p className="mt-1 text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                  Minimum 10 characters required
                </p>
              </div>
            </div>

            {/* Success/Error Messages from Server Action */}
            {state.message && (
              <div
                className={`mt-6 rounded-md p-4 border ${
                  state.success
                    ? 'bg-green-50 text-green-800 border-green-200'
                    : 'bg-red-50 text-red-800 border-red-200'
                }`}
              >
                <p className="text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                  {state.message}
                </p>
              </div>
            )}

            <div className="mt-10">
              <SubmitButton pending={isPending} />
            </div>
          </form>
    </div>
  );
}
