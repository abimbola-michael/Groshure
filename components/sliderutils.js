import cofounder from "../public/cofounder.png"
import cofounder2 from "../public/cofounder2.png"
import fruits1 from "../public/fruits1.png"
import fruits2 from "../public/fruits2.png"
import fruits3 from "../public/fruits3.png"
import mobilefruits2 from "../public/mobilefruits2.png"
import mobilefruits from "../public/mobilefruits.png"


export const imageSlider = [{
        "id": 1,
        "feedback": "James Martin",
        "title": "Cofounder",
        "para": "Have you ever finally just gave in to the temptation and read your horoscope in the newspaper on Sunday morning? Sure, we all have. For most of us, it’s a curiosity, an amusement to see.",
        "images":  [cofounder2,cofounder],
        "activeimages":  [cofounder,cofounder2],        
    },
    {
        "id": 2,
        "feedback": "Feedback Management two",
        "title": "Position title two",
        "para": "One of thee earliest activities we engaged in when we first got into astronomy is the same one we like to show our children just as soon as their excitement about the night sky begins",
        "images": [cofounder, cofounder2] ,
        "activeimages":  [cofounder2,cofounder],                 
    }
]

export const headerSlider = [fruits1, fruits2, fruits3]

export const mobileHeaderImages = [mobilefruits, mobilefruits2, fruits3]
