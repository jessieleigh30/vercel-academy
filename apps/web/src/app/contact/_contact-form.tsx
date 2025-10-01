import { useFormState, useFormStatus } from 'react-dom'
import { submitContactForm } from './actions'

// Component for the submit button to show loading state
function SubmitButton() {
    const { pending } = useFormStatus()
    
    return (
        <button
            type="submit"
            disabled={pending}
            className={`block w-full rounded-lg px-3.5 py-2.5 text-center text-sm font-semibold shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200 ${
                pending
                    ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 hover:scale-[1.02] active:scale-[0.98]'
            }`}
        >
            {pending ? 'Sending...' : 'Send Message'}
        </button>
    )
}

export function ContactForm() {
    // useFormState hook manages server action state
    // It returns [state, formAction] where:
    // - state: the return value from our server action
    // - formAction: the function to use as the form action
    const [state, formAction] = useFormState(submitContactForm, {
        success: false,
        message: ''
    })

    return (
        <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Send us a message
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Have a question or want to work with us? We'd love to hear from you!
                    </p>

                    {/* 
                    Key Server Actions concepts in this form:
                    1. action={formAction} - Uses our server action instead of onSubmit
                    2. No controlled components - React doesn't manage input values
                    3. name attributes are crucial - they become FormData keys
                    4. Form resets automatically on successful submission
                    */}
                    <form action={formAction} className="mt-16">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">
                                    Name *
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="block w-full rounded-lg bg-card/50 backdrop-blur-sm border border-border px-3.5 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200 sm:text-sm sm:leading-6"
                                        placeholder="Your full name"
                                    />
                                    {state.errors?.name && (
                                        <p className="mt-1 text-sm text-red-400">{state.errors.name}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                                    Email *
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="block w-full rounded-lg bg-card/50 backdrop-blur-sm border border-border px-3.5 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200 sm:text-sm sm:leading-6"
                                        placeholder="your.email@example.com"
                                    />
                                    {state.errors?.email && (
                                        <p className="mt-1 text-sm text-red-400">{state.errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-foreground">
                                    Phone
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="block w-full rounded-lg bg-card/50 backdrop-blur-sm border border-border px-3.5 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200 sm:text-sm sm:leading-6"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                    {state.errors?.phone && (
                                        <p className="mt-1 text-sm text-red-400">{state.errors.phone}</p>
                                    )}
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-foreground">
                                    Subject *
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        className="block w-full rounded-lg bg-card/50 backdrop-blur-sm border border-border px-3.5 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200 sm:text-sm sm:leading-6"
                                        placeholder="How can we help you?"
                                    />
                                    {state.errors?.subject && (
                                        <p className="mt-1 text-sm text-red-400">{state.errors.subject}</p>
                                    )}
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
                                    Message *
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        className="block w-full rounded-lg bg-card/50 backdrop-blur-sm border border-border px-3.5 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200 sm:text-sm sm:leading-6"
                                        placeholder="Tell us more about your inquiry..."
                                        minLength={10}
                                    />
                                    {state.errors?.message && (
                                        <p className="mt-1 text-sm text-red-400">{state.errors.message}</p>
                                    )}
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Minimum 10 characters required
                                </p>
                            </div>
                        </div>

                        {/* Success/Error Messages from Server Action */}
                        {state.message && (
                            <div className={`mt-6 rounded-lg p-4 backdrop-blur-sm border ${
                                state.success 
                                    ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                                    : 'bg-red-500/20 text-red-400 border-red-500/30'
                            }`}>
                                <p className="text-sm font-medium">
                                    {state.message}
                                </p>
                            </div>
                        )}

                        <div className="mt-10">
                            <SubmitButton />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}