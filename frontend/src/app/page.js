import Header from '../components/Header';


export default function Home() {
  return (
      <>
          <Header />
          <main className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold mb-4">Hello World</h1>
              {/* Other components and content */}
          </main>
      </>
  );
}
