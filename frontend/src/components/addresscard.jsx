import PropTypes from "prop-types";

export default function AddressCard({
    country,
    city,
    address1,
    address2,
    zipCode,
    addressType,
}) {
    return (
        <div className="w-full h-max bg-transparent p-5 rounded-lg border border-neutral-600 grid grid-cols-12 gap-4">
            {/* Country */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                <div className="w-full h-max bg-neutral-700 p-4 rounded-lg flex flex-col items-center gap-y-2">
                    <div className="text-xl text-neutral-200">Country</div>
                    <div className="text-lg font-light text-neutral-200">{country}</div>
                </div>
            </div>

            {/* City */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                <div className="w-full h-max bg-neutral-700 p-4 rounded-lg flex flex-col items-center gap-y-2">
                    <div className="text-xl text-neutral-200">City</div>
                    <div className="text-lg font-light text-neutral-200">{city}</div>
                </div>
            </div>

            {/* Address 1 */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                <div className="w-full h-max bg-neutral-700 p-4 rounded-lg flex flex-col items-center gap-y-2">
                    <div className="text-xl text-neutral-200">Address 1</div>
                    <div className="text-lg font-light text-neutral-200">{address1}</div>
                </div>
            </div>

            {/* Address 2 */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                <div className="w-full h-max bg-neutral-700 p-4 rounded-lg flex flex-col items-center gap-y-2">
                    <div className="text-xl text-neutral-200">Address 2</div>
                    <div className="text-lg font-light text-neutral-200">{address2}</div>
                </div>
            </div>

            {/* Zip Code */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                <div className="w-full h-max bg-neutral-700 p-4 rounded-lg flex flex-col items-center gap-y-2">
                    <div className="text-xl text-neutral-200">Zip Code</div>
                    <div className="text-lg font-light text-neutral-200">{zipCode}</div>
                </div>
            </div>

            {/* Address Type */}
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                <div className="w-full h-max bg-neutral-700 p-4 rounded-lg flex flex-col items-center gap-y-2">
                    <div className="text-xl text-neutral-200">Address Type</div>
                    <div className="text-lg font-light text-neutral-200">{addressType}</div>
                </div>
            </div>
        </div>
    );
}

AddressCard.propTypes = {
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    addressType: PropTypes.string.isRequired,
};
