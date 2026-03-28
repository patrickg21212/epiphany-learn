/**
 * Marker component that replaces <hr> / --- in MDX.
 * SlideRenderer detects this element to split content into discrete slides.
 * Renders a hidden marker div with a data attribute for reliable detection.
 */
export default function SlideBreak() {
  return <div data-slide-break="" style={{ display: "none" }} />;
}
