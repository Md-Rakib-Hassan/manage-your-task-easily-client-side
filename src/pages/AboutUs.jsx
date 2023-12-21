const AboutUs = () => {
    return (
        <div>
             <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 pr-8 mb-4 px-2">
            <img
              src="/team.jpg"  
              alt="Team"
              className="rounded-md shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2 text-justify px-2">
            <p className="text-gray-700 mb-4">
              We are a passionate team dedicated to revolutionizing task management. Our mission is to provide a user-friendly platform that empowers individuals and teams to efficiently organize, track, and complete tasks.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you're a developer, corporate professional, student, or freelancer, our platform is designed to meet your unique needs. With features like drag-and-drop task management and real-time collaboration, we aim to enhance your productivity and streamline your workflow.
            </p>
            <p className="text-gray-700">
              Join us on this journey to simplify task management and make work more enjoyable. Let's boost productivity together!
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default AboutUs;