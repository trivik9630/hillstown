import { motion } from "framer-motion";
import { Home, MapPin, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Home, value: "12", label: "Premium Homes", desc: "Exclusive single-family residences" },
  { icon: MapPin, value: "Prime", label: "CT Location", desc: "Near Glastonbury town line" },
  { icon: Shield, value: "High", label: "Quality Build", desc: "Premium materials & craftsmanship" },
  { icon: Clock, value: "Limited", label: "Availability", desc: "Secure your lot today" },
];

const StatsSection = () => (
  <section className="relative z-10 -mt-16 px-4 sm:px-6">
    <div className="container mx-auto">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border border-border"
          >
            <div className="mb-4 inline-flex rounded-xl gradient-green p-3">
              <stat.icon size={22} className="text-primary-foreground" />
            </div>

            <p className="text-2xl font-bold text-foreground">{stat.value}</p>

            <p className="text-sm font-semibold text-foreground">
              {stat.label}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;