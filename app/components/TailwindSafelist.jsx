// components/TailwindSafelist.jsx
export default function TailwindSafelist() {
  return (
    <div className="hidden pointer-events-none display-none" aria-hidden="true">
      {/* Grids & Layouts */}
      <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-12" />
      <div className="md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 md:grid-cols-6" />
      <div className="lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 lg:grid-cols-6" />
      
      {/* Spans */}
      <div className="col-span-1 col-span-2 col-span-3 col-span-4 col-span-6 col-span-12" />
      <div className="md:col-span-1 md:col-span-2 md:col-span-3 md:col-span-4 md:col-span-6" />
      
      {/* Flex & Alignment */}
      <div className="flex flex-col flex-row items-center justify-between justify-center gap-2 gap-4 gap-6 gap-8" />
    </div>
  );
}