import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [categoryDisplay, setCategoryDisplay] = useState(false);

  const Nav = styled.nav`
     width:24vw;
     padding-top: 22px;
     background: white;
     display:flex;
     justify-content: center;
     border-right: 1px solid #E5E5E5;
     min-height: calc(100vh - 2em)
     }
   `;

  const Categories = styled.a`
    font: 16px roboto;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    font-weight: 200;
    padding-bottom: 8px;
  `;

  const CategoriesDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  `;

  const LeftNavDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6px;
  `;
  const MainNavContainer = styled.div`
    margin-top: 30px;
  `;

  function triggerList() {
    if (categoryDisplay) {
      setCategoryDisplay(false);
    } else {
      setCategoryDisplay(true);
    }
  }

  return (
    <Nav>
      <MainNavContainer>
        <Categories onClick={triggerList}>Categories</Categories>
        {categoryDisplay ? (
          <CategoriesDiv>
            <NavLink
              to="/defining_and_tracking_dei"
              className={({ isActive }) =>
                "leftnav" + (isActive ? " active-nav" : " inactive-nav")
              }
            >
              Defining & Tracking DEI
            </NavLink>
            <NavLink
              to="/sourcing_and_attracting"
              className={({ isActive }) =>
                "leftnav" + (isActive ? " active-nav" : " inactive-nav")
              }
            >
              Sourcing & Attracting
            </NavLink>
            <NavLink
              to="/interviewing_and_engaging"
              className={({ isActive }) =>
                "leftnav" + (isActive ? " active-nav" : " inactive-nav")
              }
            >
              Interviewing & Engaging
            </NavLink>
            <NavLink
              to="/onboarding_and_advancing"
              className={({ isActive }) =>
                "leftnav" + (isActive ? " active-nav" : " inactive-nav")
              }
            >
              Onboarding & Advancing
            </NavLink>
          </CategoriesDiv>
        ) : null}
        <LeftNavDiv>
          <NavLink
            to="/growing_dei_leaders"
            className={({ isActive }) =>
              "anav" + (isActive ? " active-nav" : " inactive-nav")
            }
          >
            Growing DEI Leaders
          </NavLink>
          <NavLink
            to="/hiring_for_diversity"
            className={({ isActive }) =>
              "anav" + (isActive ? " active-nav" : " inactive-nav")
            }
          >
            Book: Hiring For Diversity
          </NavLink>
          <NavLink
            to="/diverse_communities"
            className={({ isActive }) =>
              "anav" + (isActive ? " active-nav" : " inactive-nav")
            }
          >
            Diverse Communities
          </NavLink>
          <NavLink
            to="/hiring_managers"
            className={({ isActive }) =>
              "anav" + (isActive ? " active-nav" : " inactive-nav")
            }
          >
            Hiring Managers
          </NavLink>
          <NavLink
            to="/glossary_terms"
            className={({ isActive }) =>
              "anav" + (isActive ? " active-nav" : " inactive-nav")
            }
          >
            Glossary of Terms
          </NavLink>
        </LeftNavDiv>
      </MainNavContainer>
    </Nav>
  );
};
export default Nav;
