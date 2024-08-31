import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$1,500/month",
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "1 complimentary personal training session"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": "$500/month",
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "4 personal training sessions per month",
                "Access to group fitness classes",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": "$1,000/month",
            "features": [
                "24/7 access to gym",
                "Unlimited personal training sessions",
                "Locker facility with private locker",
                "Access to all group fitness classes",
                "Free Wi-Fi",
                "Complimentary fitness assessment every month",
                "Access to sauna and steam room",
                "Nutrition consultation"
            ]
        },
        {
            "id": 4,
            "name": "Couple's Membership",
            "price": "$500/month",
            "features": [
                "Access for two individuals",
                "All benefits of Premium Membership",
                "Special couple's fitness classes",
                "10% discount on additional services"
            ]
        },
        {
            "id": 5,
            "name": "Student Membership",
            "price": "$200/month",
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "2 personal training sessions per month",
                "Access to student group fitness classes",
                "Discount on fitness gear"
            ]
        }
    ]

    return (
        <div className="md:m-12">
            <h2 className="md:text-5xl text-3xl">Best Price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;