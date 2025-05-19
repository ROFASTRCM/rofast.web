import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, PackageCheck, ShieldCheck, Map, Users, Info } from "lucide-react";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">ROFAST</h1>
        <p className="text-lg text-gray-600">
          Entregas ultrarrápidas, ecológicas y automáticas en Barcelona.
        </p>
      </header>

      <section className="max-w-xl mx-auto mb-12">
        <Input
          placeholder="Busca tu tienda o producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />
        <Button className="w-full">Buscar</Button>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Clock className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Entrega en menos de 30 min</h3>
            <p className="text-sm text-gray-600">
              Recibe tu pedido en tiempo récord gracias a nuestra flota de robots autónomos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <MapPin className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cobertura local</h3>
            <p className="text-sm text-gray-600">
              Servicio disponible en toda Barcelona con hubs estratégicos en 10 distritos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <ShieldCheck className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seguro y confiable</h3>
            <p className="text-sm text-gray-600">
              Seguimiento en tiempo real, soporte 24/7 y garantía de satisfacción o reembolso.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <PackageCheck className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Para tiendas y particulares</h3>
            <p className="text-sm text-gray-600">
              Solución logística para comercios locales y consumidores exigentes.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Map className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mapa de hubs</h3>
            <p className="text-sm text-gray-600 mb-2">
              Visualiza nuestras estaciones distribuidas por Barcelona para entregas inmediatas.
            </p>
            <Button className="w-full">Ver mapa interactivo</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Users className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Registrarse como comercio</h3>
            <p className="text-sm text-gray-600 mb-2">
              ¿Tienes una tienda? Únete a ROFAST y automatiza tus entregas.
            </p>
            <Button className="w-full">Quiero registrarme</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Info className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tarifas y FAQ</h3>
            <p className="text-sm text-gray-600 mb-2">
              Consulta nuestros precios, planes de suscripción y preguntas frecuentes.
            </p>
            <Button className="w-full">Ver información</Button>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ROFAST S.L. - Logística urbana inteligente
      </footer>
    </main>
  );
}
