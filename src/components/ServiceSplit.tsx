import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Digital Banking',
    desc: 'A secure online bank account you can open from anywhere. Hold funds, send money, and manage your finances in one place.',
    href: '/banking',
  },
  {
    num: '02',
    title: 'Property & Investment Accounts',
    desc: 'Property financing and structured investment accounts to help your money grow over time.',
    href: '/banking',
  },
  {
    num: '03',
    title: 'Safe Vault',
    desc: 'An encrypted vault for sensitive documents and assets, protected by multiple layers of authentication.',
    href: '/banking',
  },
  {
    num: '04',
    title: 'USD & Multi-Currency Accounts',
    desc: 'Hold USD and transact in 40+ currencies with competitive exchange rates and real-time settlements.',
    href: '/banking',
  },
  {
    num: '05',
    title: 'Wealth Management',
    desc: 'Our advisors help you plan investments, manage risk, and protect what you have built.',
    href: '/contact',
  },
  {
    num: '06',
    title: 'Secure by Design',
    desc: 'Bank-grade encryption, biometric login, real-time fraud detection, and 24/7 monitoring of every account.',
    href: '/banking',
  },
];

const ServiceSplit = () => {
  return (
    <section className="py-24 bg-white">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-muted-400">
          {services.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="group bg-white p-10 lg:p-12 relative overflow-hidden hover:bg-gray-50 transition-colors"
            >
              <span className="font-playfair text-7xl font-black text-muted-200 absolute top-4 right-6 leading-none select-none group-hover:text-muted-300 transition-colors">
                {s.num}
              </span>
              <h3 className="text-lg font-bold text-navy-900 mb-3 relative z-10 mt-8">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed relative z-10">{s.desc}</p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
    </section>
  );
};

export default ServiceSplit;
