import React from 'react';

const ScheduleGenerate = ({ studyPlan }) => {
    if (!studyPlan) {
        return <p className="text-center text-gray-400">No study plan generated yet.</p>;
    }

    const { primarySubjects, secondarySubjects, tertiarySubjects, hoursPerDay, daysPerWeek, totalWeeks } = studyPlan;

  
    const totalSlots = hoursPerDay * daysPerWeek;


    const primaryWeight = 0.5; // 50% of slots for primary subjects
    const secondaryWeight = 0.3; // 30% for secondary subjects
    const tertiaryWeight = 0.2; // 20% for tertiary subjects


    const primarySlots = Math.round(totalSlots * primaryWeight);
    const secondarySlots = Math.round(totalSlots * secondaryWeight);
    const tertiarySlots = totalSlots - primarySlots - secondarySlots;


    const distributeSubjects = (subjectList, count) => {
        const slots = [];
        while (slots.length < count) {
            slots.push(...subjectList);
        }
        return slots.slice(0, count);
    };

    const primarySchedule = distributeSubjects(primarySubjects, primarySlots);
    const secondarySchedule = distributeSubjects(secondarySubjects, secondarySlots);
    const tertiarySchedule = distributeSubjects(tertiarySubjects, tertiarySlots);

  
    const weekSchedule = [...primarySchedule, ...secondarySchedule, ...tertiarySchedule];
    for (let i = weekSchedule.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [weekSchedule[i], weekSchedule[j]] = [weekSchedule[j], weekSchedule[i]];
    }

    const timetable = [];
    let slotIndex = 0;

    for (let day = 0; day < daysPerWeek; day++) {
        const dailySchedule = [];
        for (let hour = 0; hour < hoursPerDay; hour++) {
            dailySchedule.push(weekSchedule[slotIndex++ % weekSchedule.length]);
        }
        timetable.push(dailySchedule);
    }

    return (
        <div
      className="relative flex flex-col items-center min-h-screen text-white p-8 "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqjpptmkh/image/upload/v1731157218/lehas15ezgnujte222xn.avif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <div className="p-6 mb-10 bg-gray-800 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-white text-center mb-4">Generated Study Plan</h2>
            <table className="table-auto w-full text-white">
                <thead>
                    <tr>
                        <th className="border border-gray-700 px-4 py-2">Hrs</th>
                        {[...Array(daysPerWeek)].map((_, i) => (
                            <th key={i} className="border border-gray-700 px-4 py-2">
                                {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"][i]}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(hoursPerDay)].map((_, hour) => (
                        <tr key={hour}>
                            <td className="border border-gray-700 px-4 py-2 text-center">{hour + 1}</td>
                            {timetable.map((day, dayIndex) => (
                                <td key={dayIndex} className="border border-gray-700 px-4 py-2 text-center">
                                    {day[hour]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ScheduleGenerate;
