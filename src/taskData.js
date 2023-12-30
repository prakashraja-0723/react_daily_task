const TASK_DATA = [
  {
    day: `Day 01`,
    id: new Date(`2023 - 12 - 28`),
    date: new Date(`2023 - 12 - 28`).getDate(),
    month: new Date(`2023 - 12 - 28`).toLocaleString(`default`, {
      month: `short`,
    }),
    year: new Date(`2023 - 12 - 28`).getFullYear(),
    img_1: `https://i.ibb.co/3RBSDb0/image-1.png`,
    img_2: `https://i.ibb.co/gyPFbC3/image-2.png`,
    img_3: `https://i.ibb.co/HdhztQy/image-3.png`,
    course_name: `React JS`,
    covered_topic: `React Syntax and Props`,
    instructor: `Raghul`,
    student: `Prakash Raja`,
    student_email: `prakashraja0723@outlook.com`,
    student_phone: `+91 9655615332`,
    whatsapp: `https://wa.me/+919655615332`,
  },
];
export default TASK_DATA;
