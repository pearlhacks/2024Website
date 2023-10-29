import React from "react";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import sponsorsData from "../public/data/sponsors.json";

const SponsorBoard = ({ isWideWindow }) => {
  const handleSponsorClick = (sponsorUrl) => {
    window.open(sponsorUrl, "_blank"); // Open the sponsor's site in a new tab
  };

  // Group sponsors by tier
  const groupedSponsors = sponsorsData.reduce((acc, sponsor) => {
    const tier = sponsor["Sponsor Tier"];
    if (!acc[tier]) {
      acc[tier] = [];
    }
    acc[tier].push(sponsor);
    return acc;
  }, {});

  // Order tiers as desired
  const tierOrder = ["Pearl", "Gold", "Silver", "Custom"];
  
  return (
    <Paper
      elevation={0} // Remove the shadow
      style={{
        padding: isWideWindow ? "50px" : "10px", // Add padding for spacing
        backgroundColor: "#F5EDC9", // Add the background color
        borderRadius: "5%", // Make it rounder
        paddingBottom: "50px", // Add padding for spacing
      }}
    >
      {tierOrder.map((tier) => (
        <div key={tier}>
          {groupedSponsors[tier] && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  flexWrap: "wrap",
                }}
              >
                {groupedSponsors[tier].map((sponsor, index) => (
                  <Link
                    key={index}
                    href={sponsor["Sponsor Site URL"]}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default behavior of the link
                      handleSponsorClick(sponsor["Sponsor Site URL"]);
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      margin: "10px",
                      overflow: "hidden", // Clip the rounded corners
                      display: "flex",
                      justifyContent: "center", // Center horizontally
                      alignItems: "center", // Center vertically
                    }}
                  >
                    <img
                      src={sponsor["Sponsor Image URL"]}
                      alt={sponsor["Sponsor Title"]}
                      style={{
                        maxHeight:
                          tier === "Pearl"
                            ? isWideWindow
                              ? "120px"
                              : "50px"
                            : tier === "Gold"
                            ? isWideWindow
                              ? "100px"
                              : "40px"
                            : tier === "Silver"
                            ? isWideWindow
                              ? "50px"
                              : "30px"
                            : isWideWindow
                            ? "50px"
                            : "20px", // Adjust the sizes based on the tier
                      }}
                    />
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </Paper>
  );
};

export default SponsorBoard;
