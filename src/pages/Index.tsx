
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Users, TrendingUp, Shield, Calculator, Pill, Search, DollarSign, Briefcase, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Mo-Blind Solutions LLC</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('case-studies')} className="text-gray-600 hover:text-blue-600 transition-colors">Case Studies</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              AI-Powered Business Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Do More With
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Less</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We specialize in using the latest AI tools to create innovative solutions that help small businesses and nonprofits streamline operations and increase efficiency.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={() => scrollToSection('contact')}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-2"
              onClick={() => scrollToSection('case-studies')}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your operations with AI-powered solutions tailored to your unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Eliminate redundant work and streamline your current processes with intelligent automation solutions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Fundraising Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create data-driven fundraising campaigns that maximize donor engagement and contribution rates.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Custom CRM Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build tailored customer and donor management systems that grow with your organization.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Bot className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Maximize your client base with intelligent tools that enhance decision-making and efficiency.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real solutions that have transformed how our clients operate
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">CRM Lite for Nonprofits</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Comprehensive volunteer and donor management system with mass communication capabilities.
                </CardDescription>
                <div className="space-y-2">
                  <Badge variant="outline">Volunteer Tracking</Badge>
                  <Badge variant="outline">Donor Management</Badge>
                  <Badge variant="outline">Mass Communication</Badge>
                  <Badge variant="outline">Skills Tagging</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Pill className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-xl">Senior Medication Reminder</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Smart medication management app with audio reminders and caregiver portal for family peace of mind.
                </CardDescription>
                <div className="space-y-2">
                  <Badge variant="outline">Audio Reminders</Badge>
                  <Badge variant="outline">Caregiver Portal</Badge>
                  <Badge variant="outline">Compliance Tracking</Badge>
                  <Badge variant="outline">Family Notifications</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Search className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-lg">Grant Finder Tool</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  AI-powered grant discovery and application drafting system that matches nonprofits with relevant funding opportunities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Calculator className="h-8 w-8 text-orange-600" />
                  <CardTitle className="text-lg">VA Loan Calculator</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Comprehensive tool for veterans to calculate remaining VA benefits, compare investments, and analyze cash flow, IRR, and NPV.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Briefcase className="h-8 w-8 text-teal-600" />
                  <CardTitle className="text-lg">Side Hustle Advisor</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Intelligent questionnaire system that provides personalized side business recommendations based on individual circumstances and goals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Mo-Blind Solutions</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            At Mo-Blind Solutions LLC, we believe in the power of intelligent automation to transform how organizations operate. 
            Our mission is simple: help you <strong>do more with less</strong> through innovative AI-powered solutions.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Whether you're looking to eliminate redundant work, streamline and document your current processes, 
            create effective fundraising campaigns, or maximize your client base, we have the expertise and tools to assist you. 
            Every solution we create is tailored to your unique needs and designed to grow with your organization.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              We don't believe in one-size-fits-all solutions. Instead, we take the time to understand your specific challenges, 
              workflows, and goals. Then we leverage cutting-edge AI tools and proven development practices to create solutions 
              that not only solve your immediate problems but position you for future growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-12 opacity-90">
            Let's discuss how we can help you do more with less. Contact us today for a consultation.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="opacity-90">info@mo-blind.com</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Website</h3>
              <p className="opacity-90">solutions.mo-blind.com</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Bot className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Solutions</h3>
              <p className="opacity-90">Custom & Scalable</p>
            </div>
          </div>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100"
          >
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-semibold">Mo-Blind Solutions LLC</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering organizations to do more with less through innovative AI solutions.
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Mo-Blind Solutions LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
