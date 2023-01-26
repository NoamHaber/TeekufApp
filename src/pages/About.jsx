import { useState,useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
                        לאוטובוס. המשתמש מכניס את שם היישוב שבו הוא רוצה לעלות על אוטובוס
                        , מספר הקו הרצוי , ומקבל קוד שתואם את הנסיעה. הקוד מתאים לאפליקציית מוביט
                        שתציע לכם את הקו הזה ב'קווים שסביבכם'(בתנאי שאתם מתקפים בתוך האוטובוס)
                        <br />
                        <div className="about-item about-header">
                            ?מה עושים עם הברקוד
                        </div>
                        אם מבקשים מכם לצלם את הברקוד, מה התועלת בליצור ברקוד מראש? כמה הצעות:
                        נוסעים נסיעה קבועה? למה שלא תדפיסו קוד מראש ותשמרו בארנק ותעלו בנחת לתקף במקומכם. נוסעים
                        עם חברים? בקשו מהם לטעון בעבורכם את הקוד המתאים ותקפו בצילום של הטלפון שלהם. מפה זה כבר
                        תלוי ביצירתיות שלכם
                        <br />
                        <div className="about-item about-header">
                            !אהבתי 
                        </div>
                        אהבתם? איזה כיף! אשמח אם תשלחו לי הודעה או סתם תיצרו קשר בעמוד הלינקדאין שלי <a style={{"color":"white","fontWeight":"bold"}} href="https://www.linkedin.com/in/noam-haber-a101521a3/" target="_blank"><FaLinkedin style={{'position':'relative','top':'2.5px','left':'1.5px','color':'blue'}}/><i style={{'position':'relative','right':'1.5px'}}>פה</i></a>. 
                        יתפרסמו שם כמה פוסטים שמסבירים עוד על המחקר שקדם לאפליקציה ולמה בעצם יצרתי אותה. בנוסף מוזמנים לעקוב בעמוד הגיטהאב שלי <a style={{"color":"white","fontWeight":"bold"}} href="https://github.com/NoamHaber/" target="_blank"><FaGithub style={{'position':'relative','top':'2.5px','left':'1.5px','color':'red'}}/><i style={{'position':'relative','right':'1.5px'}}>פה</i></a>
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
