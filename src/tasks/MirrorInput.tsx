export const MirrorInput = () => {
  return (
    <div>
      <p className="mb-4">
        Celem tego zadania jest aby w kwadratch pojawiała się ta sama wartość
        która została wpisana w input
      </p>
      <label className="flex flex-col">
        Podaj tekst do odtworzenia w kwadratach
        <input type="text" className="border border-2" />
      </label>

      <div className="grid grid-cols-12 mt-10">
        {Array.from({ length: 60 }).map((_, index) => (
          <div
            className="border w-16 h-16 items-center flex justify-center font-md"
            key={index}
          >
            1
          </div>
        ))}
      </div>
    </div>
  );
};
