import ScaleLoader from "react-spinners/ScaleLoader";

export default function Loading() {
  return (
    // gird place-items-center の影響を受けないように div タグで囲む
    <div>
      <ScaleLoader height={60} width={3} color="#858585" />
    </div>
  );
}
