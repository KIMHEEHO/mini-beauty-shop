import { DatePicker } from "react-datepicker";

type DateComponentProps = {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
};

export function DateComponent({
  selectedDate,
  setSelectedDate,
}: DateComponentProps) {
  return (
    <div className="w-1/3 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 border border-gray-100">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">날짜 선택</h2>
        <p className="text-sm text-gray-400 mt-1">
          예약 가능한 날짜를 선택해주세요
        </p>
      </div>

      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => {
          setSelectedDate(date);
        }}
        todayButton="Vandaag"
        minDate={new Date()}
        maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
        dateFormat="yyyy년 MM월 dd일"
        inline
      />
    </div>
  );
}
