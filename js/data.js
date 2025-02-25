// Exercise Database
const exercises = [
    {
        id: 1,
        name: "Sun Salutation",
        category: "yoga",
        description: "A sequence of 12 powerful yoga poses",
        benefits: [
            "Improves blood circulation",
            "Strengthens muscles",
            "Increases flexibility"
        ],
        duration: 15,
        difficulty: "beginner",
        problems: ["stiffness", "low energy", "back pain", "stress"],
        steps: [
            "Stand at the front of your mat in mountain pose.",
            "Raise your arms overhead and fold forward.",
            "Step back to a plank position, lower into chaturanga.",
            "Move into upward-facing dog, then downward-facing dog.",
            "Step forward and return to the starting position."
        ]
    },
    {
        id: 2,
        name: "Bench Press",
        category: "gym",
        description: "Classic chest exercise with barbell",
        benefits: [
            "Builds chest muscles",
            "Improves upper body strength"
        ],
        duration: 20,
        difficulty: "intermediate",
        problems: ["weak chest", "poor upper body strength"],
        steps: [
            "Lie flat on a bench with feet firmly on the ground.",
            "Grip the barbell slightly wider than shoulder-width.",
            "Lower the bar to your chest while inhaling.",
            "Push the bar back to the starting position while exhaling."
        ]
    },
    {
        id: 3,
        name: "Warrior Pose",
        category: "yoga",
        description: "Standing yoga pose that strengthens the legs and core",
        benefits: [
            "Improves balance",
            "Strengthens legs",
            "Increases focus"
        ],
        duration: 10,
        difficulty: "beginner",
        problems: ["poor balance", "weak legs", "lack of focus"],
        steps: [
            "Stand with legs wide apart.",
            "Turn one foot outwards and bend the knee.",
            "Stretch your arms parallel to the floor.",
            "Hold the position and then switch sides."
        ]
    },
    {
        id: 4,
        name: "Tree Pose",
        category: "yoga",
        description: "Standing yoga pose that improves balance and focus",
        benefits: [
            "Enhances balance",
            "Strengthens legs",
            "Improves concentration"
        ],
        duration: 10,
        difficulty: "beginner",
        problems: ["poor balance", "weak legs", "lack of focus"],
        steps: [
            "Stand tall with your feet together.",
            "Shift weight onto one foot and place the sole of the other foot on your inner thigh.",
            "Bring hands to prayer position in front of your chest or overhead.",
            "Hold and then switch sides."
        ]
    },
    {
        id: 5,
        name: "Cobra Pose",
        category: "yoga",
        description: "Gentle backbend that opens the chest and shoulders",
        benefits: [
            "Relieves back pain",
            "Improves spinal flexibility",
            "Strengthens arms"
        ],
        duration: 8,
        difficulty: "beginner",
        problems: ["back pain", "stiffness", "poor posture"],
        steps: [
            "Lie on your stomach with palms under shoulders.",
            "Inhale and lift your chest while keeping elbows slightly bent.",
            "Look slightly upward and hold for a few breaths.",
            "Lower back down gently."
        ]
    },
    {
        id: 6,
        name: "Boat Pose",
        category: "yoga",
        description: "Strengthens the core and improves balance",
        benefits: [
            "Builds core strength",
            "Enhances stability",
            "Improves digestion"
        ],
        duration: 8,
        difficulty: "intermediate",
        problems: ["weak core", "poor digestion", "poor balance"],
        steps: [
            "Sit on the mat with legs extended.",
            "Lift your legs while leaning back slightly.",
            "Stretch your arms forward parallel to the floor.",
            "Hold the position while keeping your core engaged."
        ]
    },
    {
        id: 7,
        name: "Plank Pose",
        category: "yoga",
        description: "Strengthens the core, shoulders, and arms",
        benefits: [
            "Builds core strength",
            "Enhances posture",
            "Improves shoulder stability"
        ],
        duration: 5,
        difficulty: "beginner",
        problems: ["weak core", "poor posture"],
        steps: [
            "Start in a push-up position with hands under shoulders.",
            "Engage your core and keep your body in a straight line.",
            "Hold the position for the desired duration."
        ]
    },
    {
        id: 8,
        name: "Bridge Pose",
        category: "yoga",
        description: "Backbend pose that stretches the chest and strengthens the back",
        benefits: [
            "Strengthens the back and glutes",
            "Improves spinal flexibility",
            "Opens the chest"
        ],
        duration: 8,
        difficulty: "beginner",
        problems: ["back pain", "poor posture"],
        steps: [
            "Lie on your back with knees bent and feet on the ground.",
            "Lift your hips upward while pressing through your feet.",
            "Clasp your hands under your back if comfortable.",
            "Hold and then slowly lower your hips."
        ]
    },
    {
        id: 9,
        name: "Downward Dog",
        category: "yoga",
        description: "Inverted pose that stretches the back and hamstrings",
        benefits: [
            "Improves flexibility",
            "Strengthens arms and shoulders",
            "Relieves back tension"
        ],
        duration: 8,
        difficulty: "beginner",
        problems: ["back pain", "stiffness", "poor posture"],
        steps: [
            "Start on all fours with hands and knees on the ground.",
            "Lift your hips upward, straightening your legs.",
            "Press your heels toward the ground and hold."
        ]
    },
    {
        id: 10,
        name: "Mountain Pose",
        category: "yoga",
        description: "Foundational pose that promotes posture and stability",
        benefits: [
            "Improves posture",
            "Strengthens legs",
            "Promotes focus and stability"
        ],
        duration: 5,
        difficulty: "beginner",
        problems: ["poor posture", "stiffness", "stress"],
        steps: [
            "Stand tall with feet together and arms by your sides.",
            "Engage your thighs and lift your chest.",
            "Keep your chin parallel to the floor and breathe deeply."
        ]
    }
];



// User's attendance record
let attendance = JSON.parse(localStorage.getItem('attendance')) || [];

// User's schedule
const defaultSchedule = {
    monday: [1, 2],
    tuesday: [3],
    wednesday: [1, 3],
    thursday: [2],
    friday: [1, 2, 3],
    saturday: [1],
    sunday: []
};

let userSchedule = JSON.parse(localStorage.getItem('schedule')) || defaultSchedule;