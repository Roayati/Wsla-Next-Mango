export const metadata = {
  title: 'Pricing - Wsla'
}

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p>Choose the plan that fits your needs.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <h2 className="text-2xl font-semibold mb-2">Free</h2>
          <p className="mb-2">Basic link page with unlimited links.</p>
          <p className="font-bold">$0 / month</p>
        </div>
        <div className="border rounded p-4">
          <h2 className="text-2xl font-semibold mb-2">Pro</h2>
          <p className="mb-2">Advanced customization and analytics.</p>
          <p className="font-bold">$9 / month</p>
        </div>
      </div>
    </div>
  )
}
