// components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Youtube, Instagram, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  age: string; // Using string for consistency with input values
  gender: string;
  pincode: string;
  youtubeLink: string;
  instagramLink: string;
  facebookLink: string;
  twitterLink: string;
  otherLink: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  age?: string;
  gender?: string;
  pincode?: string;
  youtubeLink?: string;
  instagramLink?: string;
  facebookLink?: string;
  twitterLink?: string;
  otherLink?: string;
}

// Helper function to validate URLs.
const isValidURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Helper function to validate email.
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Returns an errors object based on the current form data.
const getErrors = (formData: FormData): FormErrors => {
  const newErrors: FormErrors = {};

  // Name validation: required and must contain only letters and spaces.
  if (!formData.name.trim()) {
    newErrors.name = 'Name is required.';
  } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
    newErrors.name = 'Name must contain only letters and spaces.';
  }

  // Email validation: required and must be valid.
  if (!formData.email.trim()) {
    newErrors.email = 'Email is required.';
  } else if (!isValidEmail(formData.email.trim())) {
    newErrors.email = 'Enter a valid email address.';
  }

  // Age validation: ensure a positive number.
  if (!formData.age.trim()) {
    newErrors.age = 'Age is required.';
  } else {
    const ageNumber = parseInt(formData.age, 10);
    if (isNaN(ageNumber) || ageNumber <= 0) {
      newErrors.age = 'Age must be a positive number.';
    }
  }

  // Gender validation.
  if (!formData.gender) {
    newErrors.gender = 'Gender is required.';
  }

  // Pincode validation: checking for 6 digits.
  if (!formData.pincode.trim()) {
    newErrors.pincode = 'Pincode is required.';
  } else if (!/^\d{6}$/.test(formData.pincode)) {
    newErrors.pincode = 'Pincode must be a 6-digit number.';
  }

  // Validate each URL field only if a value is provided.
  if (formData.youtubeLink.trim() && !isValidURL(formData.youtubeLink.trim())) {
    newErrors.youtubeLink = 'Enter a valid URL.';
  }
  if (formData.instagramLink.trim() && !isValidURL(formData.instagramLink.trim())) {
    newErrors.instagramLink = 'Enter a valid URL.';
  }
  if (formData.facebookLink.trim() && !isValidURL(formData.facebookLink.trim())) {
    newErrors.facebookLink = 'Enter a valid URL.';
  }
  if (formData.twitterLink.trim() && !isValidURL(formData.twitterLink.trim())) {
    newErrors.twitterLink = 'Enter a valid URL.';
  }
  if (formData.otherLink.trim() && !isValidURL(formData.otherLink.trim())) {
    newErrors.otherLink = 'Enter a valid URL.';
  }

  return newErrors;
};

const RegistrationForm: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    email: '',
    age: '18', // default starting age
    gender: '',
    pincode: '',
    youtubeLink: '',
    instagramLink: '',
    facebookLink: '',
    twitterLink: '',
    otherLink: ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [serverMessage, setServerMessage] = useState<string>('');

  // Re-run validation on every form data change.
  useEffect(() => {
    const currentErrors = getErrors(formData);
    setErrors(currentErrors);
  }, [formData]);

  const validateForm = (): boolean => {
    const currentErrors = getErrors(formData);
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log('Validation failed:', errors);
      return;
    }

    setLoading(true);
    setServerMessage('');

    try {
      // Replace the URL with your backend endpoint.
      const response = await axios.post('http://localhost:8848/api/v1/influencers/create', formData);
      console.log('Form submitted successfully:', response.data.message);
      toast.success(response.data.message);
      // Clear the form data after successful submission.
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Determine if the form is valid.
  const isFormValid = Object.keys(getErrors(formData)).length === 0;

  return (
    <section id="registration-form" className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-gray-900 border border-orange-500 rounded-2xl shadow-[0_0_20px_rgba(255,165,0,0.6)] p-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-orange-500 drop-shadow-lg">
            Influencer Registration
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-white"
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-white"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              {/* Age Field */}
              <div>
                <label htmlFor="age" className="block text-gray-300 mb-2">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-white"
                  required
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
              </div>
              
              {/* Gender Field */}
              <div>
                <label htmlFor="gender" className="block text-gray-300 mb-2">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-white"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
              </div>
              
              {/* Pincode Field */}
              <div>
                <label htmlFor="pincode" className="block text-gray-300 mb-2">Location Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-white"
                  required
                />
                {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2">
                <Youtube className="text-red-600" /> 
                <input
                  type="url"
                  name="youtubeLink"
                  placeholder="YouTube Link"
                  value={formData.youtubeLink}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-white"
                />
              </div>
              {errors.youtubeLink && <p className="text-red-500 text-sm mt-1">{errors.youtubeLink}</p>}
              
              <div className="flex items-center gap-2">
                <Instagram className="text-pink-600" />
                <input
                  type="url"
                  name="instagramLink"
                  placeholder="Instagram Link"
                  value={formData.instagramLink}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-white"
                />
              </div>
              {errors.instagramLink && <p className="text-red-500 text-sm mt-1">{errors.instagramLink}</p>}
              
              <div className="flex items-center gap-2">
                <Facebook className="text-blue-600" />
                <input
                  type="url"
                  name="facebookLink"
                  placeholder="Facebook Link"
                  value={formData.facebookLink}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-white"
                />
              </div>
              {errors.facebookLink && <p className="text-red-500 text-sm mt-1">{errors.facebookLink}</p>}
              
              <div className="flex items-center gap-2">
                <Twitter className="text-blue-400" />
                <input
                  type="url"
                  name="twitterLink"
                  placeholder="Twitter Link"
                  value={formData.twitterLink}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-white"
                />
              </div>
              {errors.twitterLink && <p className="text-red-500 text-sm mt-1">{errors.twitterLink}</p>}
              
              <div className="flex items-center gap-2">
                <LinkIcon className="text-gray-400" />
                <input
                  type="url"
                  name="otherLink"
                  placeholder="Other Link"
                  value={formData.otherLink}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-white"
                />
              </div>
              {errors.otherLink && <p className="text-red-500 text-sm mt-1">{errors.otherLink}</p>}
            </div>
            
            {serverMessage && (
              <p className="mt-4 text-center text-sm text-green-500">{serverMessage}</p>
            )}
            
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`mt-8 w-full py-3 px-6 rounded-lg transition-colors font-semibold ${
                isFormValid && !loading
                  ? 'bg-orange-500 hover:bg-orange-600'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
