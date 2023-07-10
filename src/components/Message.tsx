import React from "react";

const Message: React.FC = () => {
  return (
    <div className="p-4 bg-blue-100 text-blue-800">
      <p className="text-lg">
        Most people in Australia quote their salary excluding tax and
        superannuation. Recruiters and employers like to quote it inclusive of
        super because it sounds higher. When you&apos;re looking at contract
        daily rates, it&apos;s standard to include super. This calculator helps
        you compare &quot;package&quot; and &quot;gross&quot; salaries, and
        daily contract rates, with their equivalent standard salary number.
      </p>
      <p className="mt-4">
        I like to always compare anything that&apos;s being offered with a
        &quot;standard&quot; salary number. With contracts, you tend to get paid
        more because leave, public holidays, and sick leave aren&apos;t covered.
        This calculator accounts for that.
      </p>
    </div>
  );
};

export default Message;
