export default function AgentCard({
    icon,
    name,
    status
}) {

    return (

        <div className="bg-[#121A2F]
        rounded-xl
        p-5
        border
        border-white/10
        hover:border-indigo-500
        transition-all
        duration-300">

            <div className="flex justify-between items-center">

                <div>

                    <h3 className="font-semibold text-lg">

                        {icon} {name}

                    </h3>

                    <p className="text-sm text-gray-400">

                        {status}

                    </p>

                </div>

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"/>

            </div>

        </div>

    );

}