import React from "react";
import style from "./EventFunctions.module.css";
import { useLocation } from "react-router-dom";
import Tab from "../Components/Tab";
import TabDark from "../Components/TabDark";
import { useTranslation } from "react-i18next";
import EventsTabChangeLink from "../EventAdminProfile/EventsTabChnageLink";
import Events from "./Events/Events";
import Seminars from "./Seminars/Seminars";
import DepartmentEvents from "./DepartmentEvents/DepartmentEvents";
import DepartmentSeminars from "./DepartmentSeminars/DepartmentSeminars";
import Elections from "../../DepartmentHead/Competetions/Elections/Elections";
import ParticipateEvents from "../../DepartmentHead/Competetions/ParticipateEvents/ParticipateEvents";

function EventFunctions({
  onclickVal,
  carryParentState,
  eventMgt,
  eventMgtRefetch,
}) {
  const { t } = useTranslation();
  const getQuery = useLocation();

  return (
    <div className={style.admisionApplication}>
      <div className={style.admisionApplicationTop}>
        {getQuery?.search?.substring(3) !== "departmet&events" &&
          getQuery?.search?.substring(3) !== "departmet&seminars" && (
            <div className={style.tabs}>
              <EventsTabChangeLink
                carryParentState={carryParentState}
                activeTab="event"
              >
                <div className={style.tab}>
                  {getQuery?.search?.substring(3) === "event" ? (
                    <TabDark
                      name={t("events")}
                      img="/images/internal-funds.svg"
                      imgDark="/images/internal-funds-white.svg"
                    />
                  ) : (
                    <Tab
                      name={t("events")}
                      img="/images/internal-funds.svg"
                      imgDark="/images/internal-funds-white.svg"
                    />
                  )}
                </div>
              </EventsTabChangeLink>

              <EventsTabChangeLink
                carryParentState={carryParentState}
                activeTab="seminars"
              >
                <div className={style.tab}>
                  {getQuery?.search?.substring(3) === "seminars" ? (
                    <TabDark
                      name={t("seminars")}
                      img="/images/incomes.svg"
                      imgDark="/images/incomes-white.svg"
                    />
                  ) : (
                    <Tab
                      name={t("seminars")}
                      img="/images/incomes.svg"
                      imgDark="/images/incomes-white.svg"
                    />
                  )}
                </div>
              </EventsTabChangeLink>

              <EventsTabChangeLink
                carryParentState={carryParentState}
                activeTab="election"
              >
                <div className={style.tab}>
                  {getQuery?.search?.substring(3) === "election" ? (
                    <TabDark
                      name={t("elections")}
                      img="/images/expenses.svg"
                      imgDark="/images/finance/expense-white.svg"
                    />
                  ) : (
                    <Tab
                      name={t("elections")}
                      img="/images/expenses.svg"
                      imgDark="/images/finance/expense-white.svg"
                    />
                  )}
                </div>
              </EventsTabChangeLink>

              <EventsTabChangeLink
                carryParentState={carryParentState}
                activeTab="participative"
              >
                <div className={style.tab}>
                  {getQuery?.search?.substring(3) === "participative" ? (
                    <TabDark
                      name={t("competitions")}
                      img="/images/members/competition.svg"
                      imgDark="/images/members/competition-white.svg"
                    />
                  ) : (
                    <Tab
                      name={t("competitions")}
                      img="/images/members/competition.svg"
                      imgDark="/images/members/competition-white.svg"
                    />
                  )}
                </div>
              </EventsTabChangeLink>

              <EventsTabChangeLink>
                {getQuery?.search?.substring(3) === "pending_fees" ? (
                  <TabDark
                    name={t("pending_fees")}
                    img="/images/finance/pending-fees-tab-icon.svg"
                    imgDark="/images/finance/pending-white.svg"
                  />
                ) : (
                  <Tab
                    name={t("pending_fees")}
                    img="/images/finance/pending-fees-tab-icon.svg"
                    imgDark="/images/finance/pending-white.svg"
                  />
                )}
              </EventsTabChangeLink>

              <EventsTabChangeLink>
                {getQuery?.search?.substring(3) === "moderator" ? (
                  <TabDark
                    name={t("moderators")}
                    img="/images/members/dsetting.svg"
                    imgDark="/images/members/dept-setting.svg"
                  />
                ) : (
                  <Tab
                    name={t("moderators")}
                    img="/images/members/dsetting.svg"
                    imgDark="/images/members/dept-setting.svg"
                  />
                )}
              </EventsTabChangeLink>
            </div>
          )}
        {(getQuery?.search?.substring(3) === "departmet&events" ||
          getQuery?.search?.substring(3) === "departmet&seminars") && (
          <div className={style.tabs}>
            <EventsTabChangeLink
              carryParentState={carryParentState}
              activeTab="departmet&events"
              deptId={getQuery?.state?.deptId}
            >
              <div className={style.tab}>
                {getQuery?.search?.substring(3) === "departmet&events" ? (
                  <TabDark
                    name={t("events")}
                    img="/images/internal-funds.svg"
                    imgDark="/images/internal-funds-white.svg"
                  />
                ) : (
                  <Tab
                    name={t("events")}
                    img="/images/internal-funds.svg"
                    imgDark="/images/internal-funds-white.svg"
                  />
                )}
              </div>
            </EventsTabChangeLink>

            <EventsTabChangeLink
              carryParentState={carryParentState}
              activeTab="departmet&seminars"
              deptId={getQuery?.state?.deptId}
            >
              <div className={style.tab}>
                {getQuery?.search?.substring(3) === "departmet&seminars" ? (
                  <TabDark
                    name={t("seminars")}
                    img="/images/incomes.svg"
                    imgDark="/images/incomes-white.svg"
                  />
                ) : (
                  <Tab
                    name={t("seminars")}
                    img="/images/incomes.svg"
                    imgDark="/images/incomes-white.svg"
                  />
                )}
              </div>
            </EventsTabChangeLink>

            <EventsTabChangeLink
              carryParentState={carryParentState}
              activeTab="election"
            >
              <div className={style.tab}>
                {getQuery?.search?.substring(3) === "election" ? (
                  <TabDark
                    name={t("elections")}
                    img="/images/expenses.svg"
                    imgDark="/images/finance/expense-white.svg"
                  />
                ) : (
                  <Tab
                    name={t("elections")}
                    img="/images/expenses.svg"
                    imgDark="/images/finance/expense-white.svg"
                  />
                )}
              </div>
            </EventsTabChangeLink>

            <EventsTabChangeLink
              carryParentState={carryParentState}
              activeTab="participative"
            >
              <div className={style.tab}>
                {getQuery?.search?.substring(3) === "participative" ? (
                  <TabDark
                    name={t("competitions")}
                    img="/images/members/competition.svg"
                    imgDark="/images/members/competition-white.svg"
                  />
                ) : (
                  <Tab
                    name={t("competitions")}
                    img="/images/members/competition.svg"
                    imgDark="/images/members/competition-white.svg"
                  />
                )}
              </div>
            </EventsTabChangeLink>

            <EventsTabChangeLink>
              {getQuery?.search?.substring(3) === "pending_fees" ? (
                <TabDark
                  name={t("pending_fees")}
                  img="/images/finance/pending-fees-tab-icon.svg"
                  imgDark="/images/finance/pending-white.svg"
                />
              ) : (
                <Tab
                  name={t("pending_fees")}
                  img="/images/finance/pending-fees-tab-icon.svg"
                  imgDark="/images/finance/pending-white.svg"
                />
              )}
            </EventsTabChangeLink>

            <EventsTabChangeLink>
              {getQuery?.search?.substring(3) === "moderator" ? (
                <TabDark
                  name={t("moderators")}
                  img="/images/members/dsetting.svg"
                  imgDark="/images/members/dept-setting.svg"
                />
              ) : (
                <Tab
                  name={t("moderators")}
                  img="/images/members/dsetting.svg"
                  imgDark="/images/members/dept-setting.svg"
                />
              )}
            </EventsTabChangeLink>
          </div>
        )}
      </div>
      <div className={style.applicationBody}>
        {getQuery?.search?.substring(3) === "event" && (
          <Events
            onclickVal={onclickVal}
            eventCount={eventMgt?.event_count}
            eventMgtRefetch={eventMgtRefetch}
          />
        )}

        {getQuery?.search?.substring(3) === "seminars" && (
          <Seminars
            onclickVal={onclickVal}
            eventCount={eventMgt?.seminar_count}
            eventMgtRefetch={eventMgtRefetch}
          />
        )}

        {getQuery?.search?.substring(3) === "departmet&events" && (
          <DepartmentEvents
            onclickVal={onclickVal}
            eventCount={eventMgt?.event_count}
            deptId={getQuery?.state?.deptId}
          />
        )}
        {getQuery?.search?.substring(3) === "departmet&seminars" && (
          <DepartmentSeminars
            onclickVal={onclickVal}
            eventCount={eventMgt?.seminar_count}
            deptId={getQuery?.state?.deptId}
          />
        )}
        {/* {console.info("this iemsnm event", onclickVal)} */}
        {getQuery?.search?.substring(3) === "election" && (
          <Elections
            did={onclickVal?.eventDeptId ?? ""}
            instituteId={onclickVal?.insId ?? ""}
            viewAs={"EVENT_MANAGER"}
          />
        )}
        {getQuery?.search?.substring(3) === "participative" && (
          <ParticipateEvents
            did={onclickVal?.eventDeptId ?? ""}
            instituteId={onclickVal?.insId ?? ""}
            viewAs={"EVENT_MANAGER"}
          />
        )}
      </div>
    </div>
  );
}

export default EventFunctions;
