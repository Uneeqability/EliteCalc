import React from 'react';
import { FormStep } from './FormStep';
import { StepProps } from '../types';
import { DollarSign, Info } from 'lucide-react';

export function PriceStep({ data, onNext, onBack }: StepProps) {
  const basePrice = data.squareFootage * 1.85;

  return (
    <FormStep onBack={onBack}>
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-gold/10 rounded-full mb-4">
          <DollarSign className="w-8 h-8 text-gold" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Your Estimated Price
        </h2>
      </div>

      <div className="bg-dark-lighter p-6 rounded-lg mb-8 border border-gold/20">
        <div className="space-y-4">
          <div className="flex justify-between items-center text-gray-300">
            <div>
              <p className="font-medium">Base Installation</p>
              <p className="text-sm text-gray-400">
                {data.squareFootage.toLocaleString()} sq ft × $1.85
              </p>
            </div>
            <p className="text-xl font-semibold text-gold">
              ${basePrice.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-dark p-4 rounded-lg mb-8 border border-gold/10">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
          <div className="text-sm text-gray-300">
            <p className="mb-2">
              This price includes our standard R-38 insulation installation. Additional services can be added in the next step.
            </p>
            <p>
              You may be eligible for federal or local tax incentives.{' '}
              <a 
                href="https://www.energy.gov/energysaver/financing-and-incentives"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Learn more about available incentives →
              </a>
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
      >
        View Add-on Options
      </button>
    </FormStep>
  );
}