import { useEffect } from "react";
import "./Cursor.css";
export default function CursorComponent() {
  const cursor = () => {
    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove", function (e) {
      if (cursor && cursor2 && cursor != null && cursor2 != null) {
        cursor.style.cssText = cursor2.style.cssText =
          "left: " + e.clientX + "px; top: " + e.clientY + "px;";
      }
    });
  };
  useEffect(() => {
    cursor();
  }, []);
}
