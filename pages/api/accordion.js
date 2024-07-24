

const questions = [
    {
        id: 1,
        question: "How Long Will It Take For My Order To Arrive After I Make Payment?",
        reply:"Domestic orders normally arrive within 3-7 days of shipping, unless otherwise noted.International orders normally arrive within 2-4 weeks of shipping. Please note that these orders need to pass through the customs office in your country before it will be released for final delivery, which can occasionally cause additional delays."
    },
    {
        id: 2,
        question: "How does Groshure work?",
        reply:" International orders normally arrive within 2-4 weeks of shipping. Please note that these orders need to pass through the customs office in your country before it will be released for final delivery, which can occasionally cause additional delays."
    },
    {
        id: 3,
        question: "How Can I Track My Orders & Payment?",
        reply:"Domestic orders normally arrive within 3-7 days of shipping, unless otherwise noted.International orders normally arrive within 2-4 weeks of shipping. Please note that these orders need to pass through the customs office in your country before it will be released for final delivery, which can occasionally cause additional delays."
    },
    {
        id: 4,
        question: "Why Must I Make Payment Immediately At Checkout?",
        reply:"Domestic orders normally arrive within 3-7 days of shipping, unless otherwise noted.International orders normally arrive within 2-4 weeks of shipping. Please note that these orders need to pass through the customs office in your country before it will be released for final delivery, which can occasionally cause additional delays."
    },
    {
        id: 5,
        question: "What is Groshure's Inspiration?",
        reply:"Domestic orders normally arrive within 3-7 days of shipping, unless otherwise noted.International orders normally arrive within 2-4 weeks of shipping. Please note that these orders need to pass through the customs office in your country before it will be released for final delivery, which can occasionally cause additional delays."
    },
]

export default function handler(req, res ){

    res.status(200).json(questions)

}
