import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions =
        [
            {
                "id": 1,
                "name": "Basic",
                "price": 29.99,
                "features": [
                    "Access to cardio and weightlifting areas",
                    "Limited group fitness classes (2 per week)",
                    "No access to sauna or swimming pool",
                    "Discounts on gym merchandise"
                ]
            },
            {
                "id": 2,
                "name": "Standard",
                "price": 49.99,
                "features": [
                    "Access to cardio, weightlifting",
                    "Unlimited group fitness classes",
                    "Limited access to sauna",
                    "Access to swimming pool during designated hours",
                    "Locker rental option"
                ]
            },
            {
                "id": 3,
                "name": "Premium",
                "price": 79.99,
                "features": [
                    "Full access to all gym facilities",
                    "Unlimited group fitness classes",
                    "Discounts on personal training sessions",
                    "Free towel service",
                    "Complimentary protein shakes"
                ]
            }
        ]


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;