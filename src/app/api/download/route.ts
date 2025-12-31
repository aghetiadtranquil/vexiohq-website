import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// In production, this would be stored in a database
const downloadTokens = new Map();

export async function POST(request: NextRequest) {
  try {
    const { email, resourceId, leadData } = await request.json();

    // Generate unique download token
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store token with metadata
    downloadTokens.set(token, {
      email,
      resourceId,
      leadData,
      created: new Date(),
      expires,
      downloaded: false,
      downloadCount: 0,
      ipAddresses: []
    });

    // In production, you would:
    // 1. Save to database
    // 2. Send email with download link
    // 3. Track in CRM (HubSpot, Salesforce)
    // 4. Add to marketing automation

    // Generate secure download URL
    const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download/${token}`;

    // Here you would send email
    // await sendEmail({
    //   to: email,
    //   subject: 'Your VexioHQ Resource is Ready',
    //   template: 'resource-download',
    //   data: { downloadUrl, resourceName, expiresIn: '24 hours' }
    // });

    return NextResponse.json({
      success: true,
      message: 'Download link sent to your email',
      // In dev, return the URL directly
      downloadUrl: process.env.NODE_ENV === 'development' ? downloadUrl : undefined
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate download link' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.pathname.split('/').pop();

  if (!token || !downloadTokens.has(token)) {
    return NextResponse.json(
      { error: 'Invalid or expired download link' },
      { status: 404 }
    );
  }

  const tokenData = downloadTokens.get(token);

  // Check if expired
  if (new Date() > tokenData.expires) {
    downloadTokens.delete(token);
    return NextResponse.json(
      { error: 'Download link has expired' },
      { status: 410 }
    );
  }

  // Track download
  tokenData.downloaded = true;
  tokenData.downloadCount++;
  tokenData.lastDownload = new Date();
  tokenData.ipAddresses.push(request.headers.get('x-forwarded-for') || 'unknown');

  // Map resourceId to actual file
  const resourceFiles = {
    'enterprise-agentic-ai-guide': '/downloads/whitepapers/enterprise-agentic-ai-guide.pdf',
    'oracle-to-ai-migration': '/downloads/whitepapers/oracle-to-ai-migration.pdf',
    'data-quality-ai-success': '/downloads/whitepapers/data-quality-ai-success.pdf',
    'ai-roi-calculator': '/downloads/whitepapers/ai-roi-calculator.xlsx',
    'ceo-ai-transformation-guide': '/downloads/ebooks/ceo-ai-transformation-guide.pdf',
    'vibe-coding-methodology': '/downloads/ebooks/vibe-coding-methodology.pdf',
    'sunrun-data-transformation': '/downloads/case-studies/sunrun-case-study.pdf',
    'wind-river-ai-migration': '/downloads/case-studies/wind-river-case-study.pdf',
    'insurance-claims-ai': '/downloads/case-studies/insurance-claims-case-study.pdf',
    'retail-inventory-ai': '/downloads/case-studies/retail-inventory-case-study.pdf',
    'ai-readiness-template': '/downloads/templates/ai-readiness-assessment.xlsx',
    'ai-governance-framework': '/downloads/templates/ai-governance-framework.docx',
    'ai-project-charter': '/downloads/templates/ai-project-charter.docx',
    // Link to the existing PDF we found
    'ai-business-capture': '/Capture_AI_Business_2025-08-09.pdf'
  };

  const filePath = resourceFiles[tokenData.resourceId as keyof typeof resourceFiles];
  
  if (!filePath) {
    return NextResponse.json(
      { error: 'Resource not found' },
      { status: 404 }
    );
  }

  // In production, you would:
  // 1. Log the download in analytics
  // 2. Update CRM with engagement data
  // 3. Trigger follow-up automation
  // 4. Score the lead based on behavior

  // For now, redirect to the file
  return NextResponse.redirect(new URL(filePath, request.url));
}