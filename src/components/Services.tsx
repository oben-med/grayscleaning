"use client";
import { Grid, Card, Heading, Text, Button } from '@/components';
import { Trash2, Brush, House } from 'lucide-react-native';

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Heading level={2} className="mb-4 text-primary"> Expert Cleaning and Junk Removal Solutions </Heading>
          <Text className="text-secondary"> Discover a cleaner, healthier, and more sustainable way of living with our comprehensive range of services, tailored to meet your unique needs and exceed your expectations. </Text>
        </div>
        <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white shadow-md transition-all duration-300 hover:scale-105">
            <div className="p-6">
              <House className="w-8 h-8 text-primary mb-4" />
              <Heading level={3} className="mb-2 text-primary"> Premium Residential Cleaning Services </Heading>
              <Text className="text-secondary"> Our dedicated team of experts provides meticulous and efficient cleaning services for your home, ensuring a sparkling clean and hygienic environment that you and your loved ones deserve. </Text>
              <Button className="mt-4 bg-accent hover:bg-accent-dark text-white" href="#contact"> Get a Quote Today </Button>
            </div>
          </Card>
          <Card className="bg-white shadow-md transition-all duration-300 hover:scale-105">
            <div className="p-6">
              <Brush className="w-8 h-8 text-primary mb-4" />
              <Heading level={3} className="mb-2 text-primary"> Customized Commercial Cleaning Solutions </Heading>
              <Text className="text-secondary"> We offer tailored cleaning services for your business or office, designed to enhance productivity, impress clients, and create a positive work environment that reflects your brand's values and commitment to excellence. </Text>
              <Button className="mt-4 bg-accent hover:bg-accent-dark text-white" href="#contact"> Schedule a Consultation </Button>
            </div>
          </Card>
          <Card className="bg-white shadow-md transition-all duration-300 hover:scale-105">
            <div className="p-6">
              <Trash2 className="w-8 h-8 text-primary mb-4" />
              <Heading level={3} className="mb-2 text-primary"> Eco-Friendly Junk Removal Services </Heading>
              <Text className="text-secondary"> Our team provides efficient, reliable, and environmentally responsible junk removal services, ensuring a seamless and stress-free experience that not only clears your space but also contributes to a more sustainable future. </Text>
              <Button className="mt-4 bg-accent hover:bg-accent-dark text-white" href="#contact"> Book Your Appointment </Button>
            </div>
          </Card>
        </Grid>
      </div>
    </section>
  );
}