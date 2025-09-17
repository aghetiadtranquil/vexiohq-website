import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsletterSignup from './NewsletterSignup';

// Mock fetch
global.fetch = jest.fn();

// Mock gtag
(global as any).gtag = jest.fn();

describe('NewsletterSignup Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<NewsletterSignup />);
    
    expect(screen.getByText('Stay Informed with AI Insights')).toBeInTheDocument();
    expect(screen.getByText('Get weekly insights on AI transformation, case studies, and industry trends delivered to your inbox.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    render(
      <NewsletterSignup
        title="Custom Title"
        description="Custom Description"
        placeholder="Custom Placeholder"
        variant="sidebar"
      />
    );
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Custom Placeholder')).toBeInTheDocument();
  });

  it('validates email format', async () => {
    render(<NewsletterSignup />);
    
    const input = screen.getByPlaceholderText('Enter your email address');
    const button = screen.getByRole('button', { name: /subscribe/i });
    
    // Test invalid email
    fireEvent.change(input, { target: { value: 'invalid-email' } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  });

  it('handles successful subscription', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        message: 'Successfully subscribed!',
        data: { subscribed: true }
      })
    });

    render(<NewsletterSignup />);
    
    const input = screen.getByPlaceholderText('Enter your email address');
    const button = screen.getByRole('button', { name: /subscribe/i });
    
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument();
    });
    
    expect(fetch).toHaveBeenCalledWith('/api/newsletter', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: expect.stringContaining('test@example.com')
    }));
    
    // Check analytics tracking
    expect((global as any).gtag).toHaveBeenCalledWith('event', 'newsletter_signup', expect.any(Object));
  });

  it('handles API errors', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        error: 'Server error'
      })
    });

    render(<NewsletterSignup />);
    
    const input = screen.getByPlaceholderText('Enter your email address');
    const button = screen.getByRole('button', { name: /subscribe/i });
    
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('Something went wrong. Please try again or contact support@datatranquil.com')).toBeInTheDocument();
    });
  });

  it('handles network errors', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    render(<NewsletterSignup />);
    
    const input = screen.getByPlaceholderText('Enter your email address');
    const button = screen.getByRole('button', { name: /subscribe/i });
    
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('Something went wrong. Please try again or contact support@datatranquil.com')).toBeInTheDocument();
    });
  });

  it('shows loading state during submission', async () => {
    (fetch as jest.Mock).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({
        ok: true,
        json: async () => ({ success: true })
      }), 100))
    );

    render(<NewsletterSignup />);
    
    const input = screen.getByPlaceholderText('Enter your email address');
    const button = screen.getByRole('button', { name: /subscribe/i });
    
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);
    
    expect(screen.getByText('Subscribing...')).toBeInTheDocument();
    expect(button).toBeDisabled();
    
    await waitFor(() => {
      expect(screen.queryByText('Subscribing...')).not.toBeInTheDocument();
    });
  });

  it('prevents multiple submissions', async () => {
    (fetch as jest.Mock).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({
        ok: true,
        json: async () => ({ success: true })
      }), 100))
    );

    render(<NewsletterSignup />);
    
    const input = screen.getByPlaceholderText('Enter your email address');
    const button = screen.getByRole('button', { name: /subscribe/i });
    
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);
    fireEvent.click(button); // Try to click again
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1); // Should only be called once
    });
  });

  it('resets success state after timeout', async () => {
    jest.useFakeTimers();
    
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    });

    render(<NewsletterSignup />);
    
    const input = screen.getByPlaceholderText('Enter your email address');
    const button = screen.getByRole('button', { name: /subscribe/i });
    
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument();
    });
    
    // Fast-forward time
    jest.advanceTimersByTime(5000);
    
    await waitFor(() => {
      expect(screen.queryByText('Thank you for subscribing!')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
    });
    
    jest.useRealTimers();
  });

  describe('Variant Styles', () => {
    it('applies inline variant styles', () => {
      const { container } = render(<NewsletterSignup variant="inline" />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('bg-gradient-to-r');
    });

    it('applies sidebar variant styles', () => {
      const { container } = render(<NewsletterSignup variant="sidebar" />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('bg-slate-50');
    });

    it('applies footer variant styles', () => {
      render(<NewsletterSignup variant="footer" />);
      // Footer variant doesn't have a specific background class on the wrapper
      expect(screen.getByText('Stay Updated')).toBeInTheDocument();
      expect(screen.getByText('Get the latest insights delivered to your inbox.')).toBeInTheDocument();
    });
  });
});