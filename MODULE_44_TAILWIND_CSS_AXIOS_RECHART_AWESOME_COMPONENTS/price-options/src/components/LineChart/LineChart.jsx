import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    /** fake data */
    const studentData = [
        { id: 1, name: "John", math_marks: 85, physics_marks: 78, chemistry_marks: 90 },
        { id: 2, name: "Emily", math_marks: 78, physics_marks: 82, chemistry_marks: 85 },
        { id: 3, name: "Michael", math_marks: 92, physics_marks: 88, chemistry_marks: 92 },
        { id: 4, name: "Sophia", math_marks: 65, physics_marks: 72, chemistry_marks: 68 },
        { id: 5, name: "William", math_marks: 88, physics_marks: 85, chemistry_marks: 90 },
        { id: 6, name: "Emma", math_marks: 70, physics_marks: 68, chemistry_marks: 75 },
        { id: 7, name: "James", math_marks: 95, physics_marks: 92, chemistry_marks: 98 },
        { id: 8, name: "Olivia", math_marks: 82, physics_marks: 80, chemistry_marks: 85 },
        { id: 9, name: "Alexander", math_marks: 75, physics_marks: 70, chemistry_marks: 78 },
        { id: 10, name: "Ava", math_marks: 90, physics_marks: 85, chemistry_marks: 92 }
    ];

    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey='math_marks' stroke='red'></Line>
                <Line dataKey={'physics_marks'} stroke='yellow'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;