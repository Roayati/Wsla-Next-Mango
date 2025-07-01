export const metadata = {
  title: 'Contact - Wsla'
}

export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p>If you have any questions or feedback, we'd love to hear from you.</p>
      <ul className="space-y-2">
        <li>Email: <a href="mailto:support@wsla.com" className="text-blue-600">support@wsla.com</a></li>
        <li>Twitter: <a href="https://twitter.com/wsla" className="text-blue-600">@wsla</a></li>
      </ul>
    </div>
  )
}
