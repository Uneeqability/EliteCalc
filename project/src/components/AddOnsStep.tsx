import React from 'react';
import { FormStep } from './FormStep';
import { StepProps } from '../types';
import { CheckSquare, Square } from 'lucide-react';

export function AddOnsStep({ data, onUpdate, onNext, onBack }: StepProps) {
  const toggleAddon = (addon: 'atticAirSeal' | 'radiantBarrier') => {
    onUpdate({
      addOns: {
        ...data.addOns,
        [addon]: !data.addOns[addon]
      }
    });
  };

  return (
    <FormStep onBack={onBack}>
      <h2 className="text-3xl font-bold text-white mb-6">
        Additional Services
      </h2>
      
      <div className="space-y-8 mb-8">
        <div className="bg-dark-lighter border border-gold/20 rounded-xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <button
                onClick={() => toggleAddon('atticAirSeal')}
                className="flex-shrink-0 mt-1"
              >
                {data.addOns.atticAirSeal ? (
                  <CheckSquare className="w-6 h-6 text-gold" />
                ) : (
                  <Square className="w-6 h-6 text-gray-400" />
                )}
              </button>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Attic Air Seal
                </h3>
                <img
                  src="http://chooseelite.com/wp-content/uploads/2024/01/Add-On-Attic-Air-Seal.png"
                  alt="Attic Air Seal"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-300 mb-4">
                  Seal all penetrations using 1-part closed cell foam (eg: wire holes, ceiling fans/lights, plumbing/hvac penetrations, or top plates)
                </p>
                <div className="bg-dark p-4 rounded-lg border border-gold/10">
                  <h4 className="font-semibold text-gold mb-2">Benefits include:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>DOE and EnergyStar studies show air sealing an attic space can create 10%-15% in reduction to energy bills</li>
                    <li>An Attic Air seal is the best way to eliminate the air penetration/loss to and from the attic space</li>
                    <li>The "zipper" to your jacket</li>
                  </ul>
                </div>
                <div className="mt-4 text-right">
                  <p className="text-gold text-lg">
                    ${(data.squareFootage * 0.45).toLocaleString()} 
                    <span className="text-sm text-gray-400 ml-1">
                      (${0.45}/sq ft)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-lighter border border-gold/20 rounded-xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <button
                onClick={() => toggleAddon('radiantBarrier')}
                className="flex-shrink-0 mt-1"
              >
                {data.addOns.radiantBarrier ? (
                  <CheckSquare className="w-6 h-6 text-gold" />
                ) : (
                  <Square className="w-6 h-6 text-gray-400" />
                )}
              </button>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Radiant Barrier
                </h3>
                <img
                  src="http://chooseelite.com/wp-content/uploads/2024/01/Radiant-Barrier-examples.png"
                  alt="Radiant Barrier"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-300 mb-4">
                  Install "Alumafoil Superplus" radiant barrier material to underside of attic rafters
                </p>
                <div className="bg-dark p-4 rounded-lg border border-gold/10">
                  <h4 className="font-semibold text-gold mb-2">Benefits include:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Reflects up to 97% of the radiant heat that strikes it</li>
                    <li>Lowers temperature of attic space up to 30 degrees</li>
                    <li>Creates a much better temperature for HAVC system to exist in</li>
                  </ul>
                </div>
                <div className="mt-4 text-right">
                  <p className="text-gold text-lg">
                    ${(data.squareFootage * 0.75).toLocaleString()}
                    <span className="text-sm text-gray-400 ml-1">
                      (${0.75}/sq ft)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
      >
        Continue to Final Quote
      </button>
    </FormStep>
  );
}