export default function TestMinimalPage() {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', background: 'lightblue', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '48px', color: 'black' }}>TEST PAGE - VISIBLE?</h1>
      <p style={{ fontSize: '24px', color: 'red' }}>If you can see this, the page is rendering correctly.</p>
      <p style={{ fontSize: '18px', color: 'green' }}>This is a minimal test page with inline styles.</p>
    </div>
  );
}