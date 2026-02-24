import React from "react";

export default function PublicConsulta() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h2 className="text-xl font-semibold text-center">
          Consulta Pública
        </h2>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          
          <section className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Ingresar Documento
            </h1>

            <input
              type="text"
              placeholder="Número de documento"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Consultar
            </button>
          </section>

        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-3">
        <p className="text-sm">© 2026 - Sistema de Consulta</p>
      </footer>
    </div>
  );
}
