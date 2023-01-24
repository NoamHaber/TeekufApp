import { useState,useEffect } from "react";

function About()
{
    return(
        <div className="body-element">
            <div id="about-layout">
                <div id="about-flow">
                    <div className="about-header">
                        אודות האפליקציה
                    </div>
                    <div id="about-explainer" className="about-item">
                        האפליקציה הזו נועדה לאפשר למשתמשים ליצור קוד לתיקוף עוד לפני העלייה
                        לאוטובוס. המשתמש מכניס את שם היישוב שבו הוא רוצה לעלות על אוטובוס,
                        .מספר הקו הרצוי, ומקבל קוד שתואם את הנסיעה ומתאים בעיקר לאפליקציית מוביט.
                        <br />
                        <div className="about-item about-header">
                            ?מה עושים עם הברקוד
                        </div>
                        אם מבקשים מכם לצלם את הברקוד, מה התועלת בליצור ברקוד מראש? כמה הצעות:
                        נוסעים נסיעה קבועה? למה שלא תדפיסו קוד מראש ותשמרו בארנק ותעלו בנחת לתקף במקומכם. נוסעים
                        עם חברים? בקשו מהם לטעון בעבורכם את הקוד המתאים ותקפו בצילום של הטלפון שלהם. מפה זה כבר
                        .תלוי ביצירתיות שלכם
                        <br />
                        <div className="about-item about-header">
                            !אהבתי 
                        </div>
                        אהבתם? איזה כיף! אשמח אם תשלחו לי הודעה או סתם תיצרו קשר בעמוד הלינקדאין שלי <a href="https://www.linkedin.com/in/noam-haber-a101521a3/" target="_blank">פה</a>. 
                        יתפרסמו שם כמה פוסטים שמסבירים עוד על המחקר שקדם לאפליקציה ולמה בעצם יצרתי אותה. בנוסף מוזמנים לעקוב בעמוד הגיטהאב שלי <a href="https://github.com/NoamHaber/" target="_blank">פה</a>.
                        <br />
                        <div className="about-item about-header">
                            !נסיעה נעימה
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
