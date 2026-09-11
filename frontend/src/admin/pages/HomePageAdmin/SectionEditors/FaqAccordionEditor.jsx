import React from 'react';
import { Plus, Trash2, HelpCircle } from 'lucide-react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const FaqAccordionEditor = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  const defaultFaqs = [
    { question: 'How much does a typical software development project cost?', answer: 'Project pricing depends on scope, complexity, tech stack, and timeline. Small-to-medium enterprise MVPs typically range from $15,000 to $45,000, while complex multi-platform platforms with custom AI microservices are scoped under fixed milestones or dedicated monthly retainers.' },
    { question: 'What is your standard development timeline?', answer: 'Most custom web or mobile MVP applications are delivered within 6 to 12 weeks following 2-week agile sprint iterations. We provide a detailed sprint roadmap during our initial discovery phase.' },
    { question: 'How do you select the right technology stack for our product?', answer: 'We analyze your target user concurrency, performance SLAs, security requirements, and long-term scalability needs. We typically recommend React/Next.js for frontend, Node.js or Python for APIs, and MongoDB or PostgreSQL for persistent databases.' },
    { question: 'How quickly can dedicated developers join our project?', answer: 'Our pre-vetted senior full-stack engineers, cloud architects, and UI/UX designers can onboard into your Slack, GitHub, and daily standups within 48 to 72 hours.' },
    { question: 'Are your AI & Machine Learning solutions secure for private enterprise data?', answer: 'Yes, 100%. We deploy private model instances with vector database isolation so your proprietary enterprise data is encrypted and never shared or trained publicly.' },
    { question: 'Do you offer post-launch maintenance and 24/7 cloud support?', answer: 'Yes, we offer dedicated post-launch SLAs covering continuous infrastructure monitoring, automated security patch updates, feature enhancements, and 24/7 incident response.' }
  ];

  const faqs = Array.isArray(data.faqs) ? data.faqs : defaultFaqs;

  const handleFaqChange = (idx, field, val) => {
    const updated = [...faqs];
    updated[idx] = { ...updated[idx], [field]: val };
    updateField('faqs', updated);
  };

  const addFaq = () => {
    updateField('faqs', [
      ...faqs,
      { question: 'New frequently asked question?', answer: 'Answer detail explaining technical scope or delivery.' }
    ]);
  };

  const removeFaq = (idx) => {
    const updated = faqs.filter((_, i) => i !== idx);
    updateField('faqs', updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AdminFormSection
        title="FAQ Section Headings"
        subtitle="Configure the frequently asked questions title, badge tag, and subtitle description."
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Badge Tag">
            <input
              type="text"
              className="form-control"
              value={data.badge || 'FREQUENTLY ASKED QUESTIONS'}
              onChange={(e) => updateField('badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Section Title" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.title || 'Everything You Need to Know Before Starting'}
              onChange={(e) => updateField('title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Subtitle Description" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={data.subtitle || ''}
              onChange={(e) => updateField('subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      <AdminFormSection
        title="FAQ Items & Expandable Q&A"
        subtitle="Add, edit, or remove frequently asked questions and detailed answers."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                padding: '14px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                backgroundColor: '#F8FAFC'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <HelpCircle size={15} style={{ color: '#006B8F' }} />
                  <span>Question #{idx + 1}</span>
                </span>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ color: '#DC2626', borderColor: '#FCA5A5' }}
                  onClick={() => removeFaq(idx)}
                >
                  <Trash2 size={13} />
                  <span>Remove</span>
                </button>
              </div>

              <AdminFormGrid columns={1} gap="12px">
                <AdminFormField label="Question">
                  <input
                    type="text"
                    className="form-control"
                    value={faq.question || ''}
                    onChange={(e) => handleFaqChange(idx, 'question', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Answer Detail">
                  <textarea
                    className="form-control"
                    rows={3}
                    value={faq.answer || ''}
                    onChange={(e) => handleFaqChange(idx, 'answer', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>
            </div>
          ))}

          <div>
            <button type="button" className="btn btn-secondary btn-sm" onClick={addFaq}>
              <Plus size={14} style={{ marginRight: '4px' }} />
              <span>Add FAQ Item</span>
            </button>
          </div>
        </div>
      </AdminFormSection>
    </div>
  );
};

export default FaqAccordionEditor;
