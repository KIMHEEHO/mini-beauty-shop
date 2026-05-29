import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const times = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

type TimeComponentProps = {
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
};
export default function TimeComponent({
  selectedTime,
  setSelectedTime,
}: TimeComponentProps) {
  return (
    <div className="w-2/3 flex flex-col justify-between pt-20  bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 border border-gray-100">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
        }}
      >
        {times.map((time) => (
          <Item
            key={time}
            onClick={() => setSelectedTime(time)}
            sx={{
              cursor: "pointer",
              backgroundColor: selectedTime === time ? "#ec4899" : "#fff",
              color: selectedTime === time ? "#fff" : "text.secondary",
              "&:hover": {
                backgroundColor: selectedTime === time ? "#db2777" : "#f5f5f5",
              },
            }}
          >
            {time}
          </Item>
        ))}
      </Box>
    </div>
  );
}
