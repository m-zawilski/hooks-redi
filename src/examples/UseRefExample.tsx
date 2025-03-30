import { useRef } from "react";

function UseRefExample() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <button onClick={scrollToSection}>Scroll to Section</button>
      <div style={{ height: "1000px", backgroundColor: "lightgray" }}>
        <p>Scroll down to see the section.</p>
      </div>
      <div
        ref={sectionRef}
        style={{ height: "500px", backgroundColor: "lightblue" }}
      >
        <h2>Section to Scroll To</h2>
        <p>This is the section you scrolled to.</p>
      </div>
    </div>
  );
}

export default UseRefExample;
