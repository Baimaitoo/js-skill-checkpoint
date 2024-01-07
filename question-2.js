// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
//1. เพิ่ม Task ใหม่ชื่อว่า "Walk the dog" ไปที่ส่วนท้ายของ userTaskList ซึ่ง Task นี้จะมี id เป็น 5
userTaskList.push( { id: 5, task: "Walk the dog"});
//2. ให้แก้ไขชื่อ Task ที่มี id เป็น 4 จาก "Wash dishes" เป็น "Go to the gym"
userTaskList[3].task = "Go to the gym";
//ลบ Task สุดท้ายที่อยู่ใน Array ออก
delete userTaskList[4];
console.log(userTaskList[3])
