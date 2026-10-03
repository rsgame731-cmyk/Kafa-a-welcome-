/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatusSection } from './components/StatusSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProductPreview } from './components/ProductPreview';
import { EarlyCommunitySection } from './components/EarlyCommunitySection';
import { WhyJoinSection } from './components/WhyJoinSection';
import { BuildingStorySection } from './components/BuildingStorySection';
import { RoadmapSection } from './components/RoadmapSection';
import { FeedbackSection } from './components/FeedbackSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { InfoModals } from './components/InfoModals';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'privacy' | 'terms' | 'contact' | null>(null);
  const [activePreviewFeature, setActivePreviewFeature] = useState<number | undefined>(undefined);

  const handleOpenJoinModal = () => {
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  const handleOpenFeedback = () => {
    const el = document.getElementById('feedback');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('status');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFeaturePreview = (featureIndex: number) => {
    // Map feature IDs to product preview tabs if applicable
    const tabMap: Record<number, number> = {
      0: 1, // الهوية المهنية -> Tab 1
      1: 0, // المحتوى المهني -> Tab 0
      2: 0, // العلاقات -> Tab 0
      3: 2, // الرسائل -> Tab 2
      4: 3, // الخدمات -> Tab 3
      5: 4, // الحفظ -> Tab 4
      6: 1, // الخصوصية -> Tab 1
    };
    setActivePreviewFeature(tabMap[featureIndex] ?? 0);
    const el = document.getElementById('preview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#E2E4E9] flex flex-col font-sans selection:bg-[#B37542]/30 selection:text-[#F3D7B5]">
      
      {/* Navigation */}
      <Navbar
        onOpenJoinModal={handleOpenJoinModal}
        onOpenFeedback={handleOpenFeedback}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenJoinModal={handleOpenJoinModal}
          onExploreClick={handleExploreClick}
        />

        {/* 2. Honest Status Section ("أين نحن الآن؟") */}
        <StatusSection />

        {/* 3. What Exists Today ("ماذا يمكنك أن تفعل الآن؟") */}
        <FeaturesSection
          onSelectFeaturePreview={handleSelectFeaturePreview}
        />

        {/* 4. Product Preview (Authentic Empty States & Live Interfaces) */}
        <ProductPreview
          activeTabOverride={activePreviewFeature}
          onOpenJoinModal={handleOpenJoinModal}
        />

        {/* 5. The Early Community ("كن من أوائل من يبنون كفاءة") */}
        <EarlyCommunitySection
          onOpenJoinModal={handleOpenJoinModal}
        />

        {/* 6. Why Join Now? ("لماذا تنضم الآن؟") */}
        <WhyJoinSection />

        {/* 7. Building Story ("نبني كفاءة خطوة بخطوة") */}
        <BuildingStorySection />

        {/* 8. Transparent Roadmap ("إلى أين نتجه؟") */}
        <RoadmapSection />

        {/* 9. Feedback Section ("قل لنا ما الذي ينقص كفاءة") */}
        <FeedbackSection />

        {/* 10. Final Call to Action */}
        <FinalCTA
          onOpenJoinModal={handleOpenJoinModal}
          onOpenFeedback={handleOpenFeedback}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacyModal={() => setInfoModalType('privacy')}
        onOpenTermsModal={() => setInfoModalType('terms')}
        onOpenContactModal={() => setInfoModalType('contact')}
      />

      {/* Modals */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoinModal}
      />

      <InfoModals
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />

    </div>
  );
}
