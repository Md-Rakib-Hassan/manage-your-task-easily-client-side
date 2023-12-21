import React from 'react';

const TargetAudienceSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8">Who Can Benefit from Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Developers</h3>
            <p className="text-gray-700">
              Streamline your project management, organize tasks, and enhance collaboration with our platform.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Corporate Professionals</h3>
            <p className="text-gray-700">
              Improve team efficiency, track project progress, and meet deadlines effectively in a collaborative environment.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Bankers</h3>
            <p className="text-gray-700">
              Stay organized with financial tasks, manage deadlines, and enhance productivity in the banking sector.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Students</h3>
            <p className="text-gray-700">
              Keep track of assignments, projects, and deadlines efficiently to succeed in your academic journey.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Freelancers</h3>
            <p className="text-gray-700">
              Manage your projects, deadlines, and tasks seamlessly to boost your freelance productivity.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Small Business Owners</h3>
            <p className="text-gray-700">
              Organize your business tasks, coordinate with your team, and meet project milestones effortlessly.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Teachers</h3>
            <p className="text-gray-700">
              Facilitate class assignments, manage coursework, and collaborate with students using our platform.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Researchers</h3>
            <p className="text-gray-700">
              Organize research tasks, track experiments, and manage project timelines efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
