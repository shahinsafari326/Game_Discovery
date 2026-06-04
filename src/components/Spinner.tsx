type SpinnerProps = {
  size?: string;
};

export function Spinner({ size = "h-7 w-7" }: SpinnerProps) {
  return (
    <div
      className={`${size} m-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500`}
    />
  );
}
