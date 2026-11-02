import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { ArrowRight, CheckCircle2, Loader2, RotateCcw } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = { name: '', email: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) errors.name = 'Please enter your name.';
  else if (name.length > 100) errors.name = 'Name must be 100 characters or fewer.';

  if (!email) errors.email = 'Please enter your email.';
  else if (email.length > 200 || !EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.';

  if (!message) errors.message = 'Please write a message.';
  else if (message.length > 2000) errors.message = 'Message must be 2000 characters or fewer.';

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const updateField = (field: keyof FormValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    });

    if (error) {
      setStatus('error');
      return;
    }
    setValues(emptyValues);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
        <CheckCircle2 className="h-14 w-14 text-success-400" aria-hidden="true" />
        <h3 className="font-display mt-6 text-3xl font-bold text-bone">Message sent.</h3>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-300">
          Thanks for reaching out. I will get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:bg-white/10"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            type="text"
            name="name"
            autoComplete="name"
            maxLength={100}
            value={values.name}
            onChange={updateField('name')}
            disabled={sending}
            aria-invalid={Boolean(errors.name)}
            className="field-input"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            name="email"
            autoComplete="email"
            maxLength={200}
            value={values.email}
            onChange={updateField('email')}
            disabled={sending}
            aria-invalid={Boolean(errors.email)}
            className="field-input"
          />
        </Field>
      </div>

      <Field label="Message" error={errors.message}>
        <textarea
          name="message"
          rows={5}
          maxLength={2000}
          value={values.message}
          onChange={updateField('message')}
          disabled={sending}
          aria-invalid={Boolean(errors.message)}
          className="field-input resize-none"
        />
      </Field>

      {status === 'error' && (
        <p role="alert" className="text-sm text-error-400">
          Something went wrong while sending your message. Please try again.
        </p>
      )}

      <MagneticButton>
        <button
          type="submit"
          disabled={sending}
          className="group inline-flex items-center gap-3 rounded-full bg-bone px-8 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-white disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </>
          )}
        </button>
      </MagneticButton>
    </form>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="group block">
      <span className="text-xs font-medium uppercase tracking-[0.25em] text-ink-300 transition-colors group-focus-within:text-electric-400">
        {label}
      </span>
      <span className="mt-3 block">{children}</span>
      <span
        role={error ? 'alert' : undefined}
        className={`mt-2 block min-h-[1.25rem] text-sm text-error-400 transition-opacity duration-300 ${error ? 'opacity-100' : 'opacity-0'}`}
      >
        {error ?? ' '}
      </span>
    </label>
  );
}
