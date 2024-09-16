function chat() {
    let questions = {
        "Hi" : "Hello", 
        "I feel sad" : "You Will Face Many Challenges in Life, you can do it!", 
        "When Should I Get Professional Help?" : "If you are experiencing persistent symptoms that are disrupting your daily life, seeking advice from a mental health professional is recommended.",
        "1" : "If you are experiencing persistent symptoms that are disrupting your daily life, seeking advice from a mental health professional is recommended.",
        "What Self-care Techniques can I Use?" : "Try engaging in enjoyable hobbies, setting boundaries, practicing relaxation techniques, getting sufficient sleep, and fostering social connections.",
        "2" : "Try engaging in enjoyable hobbies, setting boundaries, practicing relaxation techniques, getting sufficient sleep, and fostering social connections.",
        "How Can I Control My Stress Effectively?" : "Mindfulness or meditation, physical activity, prioritizing self-care, and seeking support from loved ones are effective ways to manage stress.",
        "3" : "Mindfulness or meditation, physical activity, prioritizing self-care, and seeking support from loved ones are effective ways to manage stress.",
        "Can Natural Vitamins Help with Mental Health?" : "It is important to consult with a healthcare practitioner as their efficacy and safety can vary",
        "4" : "It is important to consult with a healthcare practitioner as their efficacy and safety can vary",
        "How Can I Increase My Mental Health Resilience?" : "Building resilience involves developing good coping mechanisms, establishing a support network, cultivating a positive mindset, and seeking professional help if needed.",
        "5" : "Building resilience involves developing good coping mechanisms, establishing a support network, cultivating a positive mindset, and seeking professional help if needed.",
        "Can You Recommend Any Ways for Dealing with Anxiety?" : "Try deep breathing exercises, cognitive-behavioral therapy (CBT) techniques, mindfulness practices, and implementing a relaxing routine.",
        "6" : " Try deep breathing exercises, cognitive-behavioral therapy (CBT) techniques, mindfulness practices, and implementing a relaxing routine.",
        "How Can I Improve My Quality of Sleep?" : "Try maintaining a consistent sleep schedule, creating a sleep-friendly environment, practicing relaxation techniques before bedtime, and avoiding stimulants close to bedtime.",
        "7" : "Try maintaining a consistent sleep schedule, creating a sleep-friendly environment, practicing relaxation techniques before bedtime, and avoiding stimulants close to bedtime.",
        "How Vital is Diet for Mental Health?" : "Nutrition can impact mental health, and a well-balanced diet can contribute to overall health.",
        "8" : "Nutrition can impact mental health and a well-balanced diet can contribute to overall health.",
        "How Can I Boost My Self-Esteem and Enhance my Body Image?" : "It can be achieved through confronting negative thoughts, surrounding yourself with positive influences, and engaging in activities that boost confidence.",
        "9" : "It can be achieved through confronting negative thoughts, surrounding yourself with positive influences, and engaging in activities that boost confidence.",
        "Is Dieting Harmful?" : "Any diet that drastically cuts calories or doesn't provide enough important nutrients can be harmful.",
        "10" : "Any diet that drastically cuts calories or doesn't provide enough important nutrients can be harmful.",
        "Where Can I Ask Help for Anxiety?" : "Psychologist. A psychologist can offer psychotherapy, also known as talk therapy or counseling.",
        "11" : "Psychologist. A psychologist can offer psychotherapy, also known as talk therapy or counseling.",
        "How Do I Deal with and Cope with Sadness and Loss?" : "Coping with sadness and loss may involve allowing oneself to grieve, seeking support from loved ones or support groups, practicing self-care, and considering counseling.",
        "12" : "Coping with sadness and loss may involve allowing oneself to grieve, seeking support from loved ones or support groups, practicing self-care, and considering counseling.",
        "How Can I Avoid Thinking Negatively?" : "Overcoming negative thought patterns may require cognitive restructuring, questioning irrational beliefs, and seeking further help through counseling.",
        "13" : "Overcoming negative thought patterns may require cognitive restructuring, questioning irrational beliefs, and seeking further help through counseling.",
        "How Do Manage and Prevent Burnouts?" : "Managing and preventing burnout include setting limits, practicing self-care, taking frequent breaks, seeking help, and maintaining a good work-life balance.",
        "14" : "Managing and preventing burnout include setting limits, practicing self-care, taking frequent breaks, seeking help, and maintaining a good work-life balance.",
        "How Can I Control and Lessen My Deperession?" : "Depression can be treated through therapy, medication (if prescribed by a healthcare professional), regular exercise, social support, and self-care practices.",
        "15" : "Depression can be treated through therapy, medication (if prescribed by a healthcare professional), regular exercise, social support, and self-care practices.",
        "What Changes Can I Make to Improve my Mental Health?" : "Our sleep, eating habits, how much we move our body, our community/social connections, and finding joy are all key to our mental well-being.",
        "16" : "Our sleep, eating habits, how much we move our body, our community/social connections, and finding joy are all key to our mental well-being.",
        "Difference Between Positive and Negative Symptomps?" : "Positive symptoms are changes in thoughts and feelings that are “added on” to a person's experiences, on the other hand these are things that are “taken away”.",
        "17" : "Positive symptoms are changes in thoughts and feelings that are “added on” to a person's experiences, on the other hand these are things that are “taken away”.",
        "What Causes Stress and Anxiety?" : "A big event or a buildup of smaller stressful life situations may trigger excessive anxiety.",
        "18" : "A big event or a buildup of smaller stressful life situations may trigger excessive anxiety."
    };

    let user = document.getElementById("question-box").value;
    document.getElementById("answer-box").innerHTML=user + "<br>";
        if (user in questions) {
            document.getElementById("answer-box").innerHTML=questions[user] + "<br>"
        }
        else {
            document.getElementById("answer-box").innerHTML="Thank you for using <b>MENTY</b>! but your message's response is still on process."
        }
}
