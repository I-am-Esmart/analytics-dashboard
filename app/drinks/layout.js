const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>Nextjs Tutorial</code>
          <code>Nextjs </code>
        </pre>
      </div>

      {children}
    </div>
  );
};

export default DrinksLayout;
