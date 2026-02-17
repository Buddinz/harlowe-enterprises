'use client'

import type { Metadata } from 'next'
import { useState } from 'react'

// Can't use Metadata with 'use client', but this is the meta info
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    message: '',
    mode: 'Not sure',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email'
    if (!formData.message.trim()) newErrors.message = 'Please tell us what you\'re seeing'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        role: '',
        email: '',
        phone: '',
        message: '',
        mode: 'Not sure',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="heading-lg mb-6">Let's Talk</h1>
          <p className="text-lg text-gray-600">
            Tell us what you're seeing. We'll respond within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              {submitStatus === 'success' ? (
                <div className="bg-harlowe-light border-l-4 border-harlowe-blue p-8 rounded text-center">
                  <h3 className="heading-sm mb-2">Received.</h3>
                  <p className="text-gray-600">
                    We'll review and reply within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                >
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-harlowe-blue transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-harlowe-blue transition-colors"
                      placeholder="Company name (optional)"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-harlowe-blue transition-colors"
                      placeholder="Your role (optional)"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-harlowe-blue transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-harlowe-blue transition-colors"
                      placeholder="(optional)"
                    />
                  </div>

                  {/* Mode Preference */}
                  <div>
                    <label htmlFor="mode" className="block text-sm font-semibold mb-2">
                      Preferred Output Mode
                    </label>
                    <select
                      id="mode"
                      name="mode"
                      value={formData.mode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-harlowe-blue transition-colors"
                    >
                      <option value="Not sure">Not sure yet</option>
                      <option value="Executive Mode">Executive Mode</option>
                      <option value="CFO Mode">CFO Mode</option>
                      <option value="Both">Both modes</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      What are you seeing? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-harlowe-blue transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Describe the operational challenges you're facing. What's causing friction? Where are decisions bottlenecking?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                        isSubmitting
                          ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                          : 'btn-primary w-full'
                      }`}
                    >
                      {isSubmitting ? 'Sending…' : 'Send Request'}
                    </button>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                      Something went wrong. Please email us at{' '}
                      <a href="mailto:info@harloweinvest.com" className="font-semibold underline">
                        info@harloweinvest.com
                      </a>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="md:col-span-1">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:info@harloweinvest.com"
                    className="text-harlowe-blue font-semibold hover:underline"
                  >
                    info@harloweinvest.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
                    Phone
                  </h3>
                  <a
                    href="tel:832-319-9795"
                    className="text-harlowe-blue font-semibold hover:underline"
                  >
                    832-319-9795
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
                    Schedule a Call
                  </h3>
                  <a
                    href="https://cal.com/placeholder"
                    className="inline-block px-4 py-3 border-2 border-harlowe-blue text-harlowe-blue font-semibold rounded-lg hover:bg-harlowe-blue hover:text-white transition-colors duration-200"
                  >
                    Schedule a 15-min fit check
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    Calendar link available after intake.
                  </p>
                </div>

                <div className="bg-harlowe-light p-6 rounded-lg">
                  <h3 className="text-sm font-semibold mb-3">Response Time</h3>
                  <p className="text-sm text-gray-600">
                    We respond to all inquiries within 1–2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
