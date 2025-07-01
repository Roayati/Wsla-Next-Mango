export const metadata = {
  title: 'About - Wsla'
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">About Wsla</h1>
        <p className="text-xl text-gray-600 mt-4">
          Connecting your world, one link at a time.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Wsla helps you share all of your important links in one convenient place. Our mission is to make it easy to build a single destination for your online presence. We aim to empower creators, businesses, and individuals to consolidate their digital footprint effortlessly.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Founded with the vision of simplifying online sharing, Wsla was created to address the common challenge of managing multiple links. We noticed that whether you are promoting your personal brand or running a business, the need to share a variety of online resources – from social profiles to project portfolios – was universal.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Wsla lets you collect your social profiles, contact information, and more on a single, customizable page. Our journey is driven by the desire to provide a clean, user-friendly platform that makes connecting with your audience seamless and effective.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Why Wsla?</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed space-y-2">
          <li><span className="font-semibold">Simplicity:</span> Easily create and manage all your links from one dashboard.</li>
          <li><span className="font-semibold">Customization:</span> Personalize your Wsla page to reflect your brand and style.</li>
          <li><span className="font-semibold">Analytics:</span> Understand your audience with insights on link performance.</li>
          <li><span className="font-semibold">Accessibility:</span> Share one link to rule them all, making it easy for your audience to find what they need.</li>
        </ul>
      </section>

      {/* Placeholder for Meet the Team - The template has a team section */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4 text-center">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {/* Example Team Member Card - Repeat as needed */}
          {/* <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            {/* <img src="/path-to-image.jpg" alt="Team Member Name" className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
            {/* <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-300 flex items-center justify-center text-gray-500">Image Placeholder</div>
            <h3 className="text-xl font-semibold text-gray-800">Team Member Name</h3>
            <p className="text-gray-600">Role/Title</p>
          </div> */}
        {/*</div>
      </section> */}

      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Join Us on Our Journey</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          We are constantly evolving and adding new features to make Wsla the best link-in-bio tool for you. <br />
          Create your Wsla page today and simplify your online presence!
        </p>
        {/* Link to pricing or signup page if available */}
        {/* <a href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
          Get Started
        </a> */}
      </section>
    </div>
  )
}
